import fastify from "fastify";

declare module "fastify" {
  interface Session {
    counter_visits: number;
    user_id?:string;
  }
}