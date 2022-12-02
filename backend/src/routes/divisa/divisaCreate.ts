import { FastifyPluginAsync } from "fastify";
import { BadRequest } from "http-errors";
import { DivisaModel } from "../../model/divisa.model";
import { isEmpty } from "../../util/is_empty";

export const divisa_create: FastifyPluginAsync = async (app) => {
    app.post<{Body: { detalleDIV: string; montoDivisa: number; divisa: string; pago: string };
    }>
        ("/", async (req, res) => {

            const data = req.body;
            req.log.info("Output");
            console.log(data);
            const { detalleDIV, montoDivisa, divisa, pago } = data;

            if (isEmpty(detalleDIV)) {
                throw new BadRequest("Detalle no definido");
            }

            if (isEmpty(divisa)) {
                throw new BadRequest("Divisa no definido");
            }
            if (isEmpty(pago)) {
                throw new BadRequest("Pago no definido");
            }

            const doc = await DivisaModel.create({
                detalleDIV,
                montoDivisa,
                divisa,
                pago,
                user_id: (req.user as any).sub,
            });
            return doc;
        });
};