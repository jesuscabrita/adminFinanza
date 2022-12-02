import { FastifyPluginAsync } from "fastify";
import { NotFound, BadRequest } from "http-errors";
import { Types } from "mongoose";
import { isEmpty } from "../../util/is_empty";
import { DivisaModel } from "../../model/divisa.model";

export const divisa_delete: FastifyPluginAsync = async (app) => {
    app.delete<{ Params: { divisa_id: string } }>(
        "/:divisa_id",
        async (req, res) => {

            const { divisa_id } = req.params;

            if (isEmpty(divisa_id)) {
                throw new BadRequest("identifica para eliminar");
            }

            if (!Types.ObjectId.isValid(divisa_id)) {
                throw new BadRequest("divisa_id debe ser una id válido");
            }

            const product_doc = await DivisaModel.findById(divisa_id);
            if (!product_doc) {
                throw new NotFound("la cuenta no existe");
            }

            await DivisaModel.findByIdAndDelete(divisa_id);

            return {
                status: "Eliminado",
            };
        }
    );
};