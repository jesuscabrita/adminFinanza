import { FastifyPluginAsync } from "fastify";
import { DivisaModel } from "../../model/divisa.model";

export const divisa_list: FastifyPluginAsync = async (app) => {
    app.get("/", async (req, res) => {
      const {sub }= req.user as any;
        const divisa = await DivisaModel.find({user_id: sub});
        return divisa;
  });
};