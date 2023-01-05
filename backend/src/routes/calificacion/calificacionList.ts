import { FastifyPluginAsync } from "fastify";
import { CalificacionModel } from "../../model/calificacion.model";


export const calificacion_list: FastifyPluginAsync = async (app) => {
    app.get("/", async (req, res) => {
    //   const { sub }= req.user as any;
        const calificacion = await CalificacionModel.find({});
        // const admin = await AdminModel.find({});
        return calificacion;
    });
};