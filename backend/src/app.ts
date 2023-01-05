import fastifyCors from "@fastify/cors";
import { FastifyPluginAsync } from "fastify";
import { db_plugin } from "./database/db";
import { admin_get } from "./routes/admin/adminGet";
import { admin_list } from "./routes/admin/adminList";
import auth0Verify from "fastify-auth0-verify";
import { admin_delete } from "./routes/admin/adminDelete";
import { admin_create } from "./routes/admin/adminCreate";
import { divisa_list } from "./routes/divisa/divisaList";
import { divisa_get } from "./routes/divisa/divisaGet";
import { divisa_delete } from "./routes/divisa/divisaDelete";
import { divisa_create } from "./routes/divisa/divisaCreate";
import { admin_Edit } from "./routes/admin/adminEdit";
import { divisa_Edit } from "./routes/divisa/divisaEdit";
import { calificacion_list } from "./routes/calificacion/calificacionList";
import { calificacion_get } from "./routes/calificacion/calificacionGet";
import { calificacion_delete } from "./routes/calificacion/calificacionDelete";
import { calificacion_create } from "./routes/calificacion/calificacionCreate";
import { calificacion_Edit } from "./routes/calificacion/calificacionEdit";

const admin_plugin: FastifyPluginAsync = async (app) => {
  app.addHook("preValidation", app.authenticate);
  app.register(admin_list);
  app.register(admin_get);
  app.register(admin_delete);
  app.register(admin_create);
  app.register(admin_Edit);
};
const divisa_plugin: FastifyPluginAsync =async (app) =>{
  app.addHook("preValidation", app.authenticate);
  app.register(divisa_list);
  app.register(divisa_get);
  app.register(divisa_delete);
  app.register(divisa_create);
  app.register(divisa_Edit);
};
const calificacion_plugin: FastifyPluginAsync =async (app) =>{
  app.addHook("preValidation", app.authenticate);
  app.register(calificacion_list);
  app.register(calificacion_get);
  app.register(calificacion_delete);
  app.register(calificacion_create);
  app.register(calificacion_Edit);
};
export const app: FastifyPluginAsync = async (app) => {
  await app.register(auth0Verify, {
    domain: "dev-jesuscabrita.us.auth0.com",
    audience: "admin",
  });

  app.register(db_plugin);
  app.register(fastifyCors);
  app.register(admin_plugin, { prefix: "/admin" });
  app.register(divisa_plugin, { prefix: "/divisa" });
  app.register(calificacion_plugin, { prefix: "/calificacion" });
};
