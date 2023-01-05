import { FastifyPluginAsync } from "fastify";
import { BadRequest } from "http-errors";
import { CalificacionModel } from "../../model/calificacion.model";
import { isEmpty } from "../../util/is_empty";

export const calificacion_create: FastifyPluginAsync = async (app) => {
    app.post<{
    Body: { comentario: string; valor: number };
    }>("/", async (req, res) => {

        const data = req.body;
        req.log.info("Output");
        console.log(data);
        const { comentario, valor } = data;

        if (isEmpty(comentario)) {
        throw new BadRequest("Comentario no definido");
        }

        if (isEmpty(valor)) {
        throw new BadRequest("Valor no definido");
        }

        const doc = await CalificacionModel.create({
        comentario,
        valor,
        user_id: (req.user as any).sub,
        });

        return doc;
    });
};