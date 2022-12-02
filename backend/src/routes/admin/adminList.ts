import { FastifyPluginAsync } from "fastify";
import { AdminModel } from "../../model/admin.model";

export const admin_list: FastifyPluginAsync = async (app) => {
    app.get("/", async (req, res) => {
      const { sub }= req.user as any;
        const admin = await AdminModel.find({user_id: sub});
        // const admin = await AdminModel.find({});
        return admin;
  });
};