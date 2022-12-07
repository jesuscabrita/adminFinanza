"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const app_1 = require("./app");
const fastify_blipp_1 = __importDefault(require("fastify-blipp"));
const server = (0, fastify_1.default)({
    disableRequestLogging: true,
    logger: {
        transport: {
            target: "pino-pretty",
            options: {
                translateTime: "HH:MM:ss Z",
                ignore: "pid,hostname",
            },
        },
    },
});
server.register(fastify_blipp_1.default);
server.register(app_1.app);
server
    .listen({
    port: parseInt('5000'),
    host: "0.0.0.0",
})
    .then(() => {
    server.blipp();
});
