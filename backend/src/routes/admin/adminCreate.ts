import { FastifyPluginAsync } from "fastify";
import { BadRequest } from "http-errors";
import { AdminModel } from "../../model/admin.model";
import { isEmpty } from "../../util/is_empty";

export const admin_create: FastifyPluginAsync = async (app) => {
  app.post<{
    Body: { detalleARS: string; monto: number; tipo: string; pago: string };
  }>("/", async (req, res) => {

    const data = req.body;
    req.log.info("Output");
    console.log(data);
    const { detalleARS, monto, tipo, pago } = data;

    if (isEmpty(detalleARS)) {
      throw new BadRequest("Detalle no definido");
    }

    if (isEmpty(tipo)) {
      throw new BadRequest("Tipo no definido");
    }
    if (isEmpty(pago)) {
      throw new BadRequest("Pago no definido");
    }

    const doc = await AdminModel.create({
      detalleARS,
      monto,
      tipo,
      pago,
      user_id: (req.user as any).sub,
    });

    return doc;
  });
};
