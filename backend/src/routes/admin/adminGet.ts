import { FastifyPluginAsync } from "fastify";
import { NotFound } from "http-errors";
import { AdminModel } from "../../model/admin.model";

export const admin_get: FastifyPluginAsync = async (app) => {
    app.get<{ Params: { admin_id: string } }>("/:admin_id", async (req, res) => {
        const { admin_id } = req.params;
        
        req.log.info(`Fetching receta ${admin_id}`);

        const doc = await AdminModel.findById(admin_id);
        if (!doc) {
            throw new NotFound("cuenta no encontrada");
        }
        return doc;
    });
};
