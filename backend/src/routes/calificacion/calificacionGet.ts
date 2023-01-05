import { FastifyPluginAsync } from "fastify";
import { NotFound } from "http-errors";
import { CalificacionModel } from "../../model/calificacion.model";

export const calificacion_get: FastifyPluginAsync = async (app) => {
    app.get<{ Params: { calificacion_id: string } }>("/:calificacion_id", async (req, res) => {
        const { calificacion_id } = req.params;
        
        req.log.info(`Fetching calificacion ${calificacion_id}`);

        const doc = await CalificacionModel.findById(calificacion_id);
        if (!doc) {
            throw new NotFound("cuenta no encontrada");
        }
        return doc;
    });
};