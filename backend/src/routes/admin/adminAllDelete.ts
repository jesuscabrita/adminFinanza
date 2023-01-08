import { FastifyPluginAsync } from "fastify";
import { AdminDocument, AdminModel } from "../../model/admin.model";

const deleteAdmin = async (admin_id: AdminDocument["_id"]) => {
  await AdminModel.findByIdAndDelete(admin_id);
};

export const admin_deleteAll: FastifyPluginAsync = async (app) => {
  app.delete("/delete-all", async (req, reply) => {
    const { sub }= req.user as any;
    const admin = await AdminModel.find({user_id: sub});

    await Promise.all(admin .map((doc) => deleteAdmin(doc._id)));

    return {
      status: "Eliminado todo ",
  };
  });
};