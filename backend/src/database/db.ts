import { FastifyPluginAsync } from "fastify";
import mongoose from "mongoose";
import { ACKEE_MONGODB } from "../config";


export const db_plugin: FastifyPluginAsync = async (app) => {
  app.log.info(`⚛️ Conectando a la base de datos...`);
  mongoose.connect(ACKEE_MONGODB).then(() => {
    app.log.info(`✅ Conectado a la base de datos: ${ACKEE_MONGODB}`);
  });
};