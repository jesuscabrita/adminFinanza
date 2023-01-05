import { FastifyPluginAsync } from "fastify";
import { NotFound, BadRequest } from "http-errors";
import { isEmpty } from "../../util/is_empty";
import { Types } from "mongoose";
import { CalificacionModel } from "../../model/calificacion.model";

export const calificacion_delete: FastifyPluginAsync = async (app) => {
    app.delete<{ Params: { calificacion_id: string } }>(
        "/:calificacion_id",
        async (req, res) => {
            
            const { calificacion_id } = req.params;

            if (isEmpty(calificacion_id)) {
                throw new BadRequest("identifica para eliminar");
            }

            if (!Types.ObjectId.isValid( calificacion_id )) {
                throw new BadRequest(" calificacion_id  debe ser una id válido");
            }

            const product_doc = await CalificacionModel.findById(calificacion_id);
            if (!product_doc) {
                throw new NotFound("la cuenta no existe");
            }

            await CalificacionModel.findByIdAndDelete(calificacion_id);

            return {
                status: "Eliminado",
            };
        }
    );
};