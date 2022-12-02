import { FastifyPluginAsync } from "fastify";
import { NotFound, BadRequest } from "http-errors";
import { Types } from "mongoose";
import { isEmpty } from "../../util/is_empty";
import { AdminModel } from "../../model/admin.model";

export const admin_delete: FastifyPluginAsync = async (app) => {
    app.delete<{ Params: { admin_id: string } }>(
        "/:admin_id",
        async (req, res) => {
            
            const { admin_id } = req.params;

            if (isEmpty(admin_id)) {
                throw new BadRequest("identifica para eliminar");
            }

            if (!Types.ObjectId.isValid(admin_id)) {
                throw new BadRequest("admin_id debe ser una id válido");
            }

            const product_doc = await AdminModel.findById(admin_id);
            if (!product_doc) {
                throw new NotFound("la cuenta no existe");
            }

            await AdminModel.findByIdAndDelete(admin_id);

            return {
                status: "Eliminado",
            };
        }
    );
};