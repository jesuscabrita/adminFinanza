import { FastifyPluginAsync } from "fastify";
import { AdminModel } from "../../model/admin.model";

export const admin_Edit: FastifyPluginAsync = async (app) => {
    app.put<{ Body: { detalleARS: string; monto: number; tipo: string; pago: string }
    }>("/",
        async (req, res) => {

            const data = req.body;
            req.log.info("Editado");
            console.log(data);
            const { detalleARS, monto, tipo, pago } = data;

            const doc = await AdminModel.updateOne({
                detalleARS,
                monto,
                tipo,
                pago,
                user_id: (req.user as any).sub,
            },{  detalleARS,
                monto,
                tipo,
                pago:'si',
                user_id: (req.user as any).sub,});

            return {
                status: "Editado",
            };
        }
    )
}