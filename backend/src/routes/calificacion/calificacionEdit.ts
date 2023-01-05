import { FastifyPluginAsync } from "fastify";
import { CalificacionModel } from "../../model/calificacion.model";


export const calificacion_Edit: FastifyPluginAsync = async (app) => {
    app.put<{ Body: { comentario: string; valor: number }
    }>("/",
        async (req, res) => {

            const data = req.body;
            req.log.info("Editado");
            console.log(data);
            const { comentario, valor } = data;

            const doc = await CalificacionModel.updateOne({
                comentario,
                valor,
                user_id: (req.user as any).sub,
            },{  comentario,
                valor,
                user_id: (req.user as any).sub,});

            return {
                status: "Editado",
            };
        }
    )
}