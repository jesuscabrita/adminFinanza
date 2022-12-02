import { FastifyPluginAsync } from "fastify";
import { NotFound } from "http-errors";
import { DivisaModel } from "../../model/divisa.model";

export const divisa_get: FastifyPluginAsync = async (app) => {
    app.get<{ Params: { divisa_id: string } }>("/:divisa_id", async (req, res) => {
        const { divisa_id } = req.params;
        
        req.log.info(`Fetching receta ${divisa_id}`);

        const doc = await DivisaModel.findById(divisa_id);
        if (!doc) {
            throw new NotFound("Divisa no encontrada");
        }
        return doc;
    });
};
