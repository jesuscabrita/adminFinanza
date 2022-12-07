"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ACKEE_PORT = exports.ACKEE_MONGODB = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const checkEnv = (enVar) => {
    const envVariable = process.env[enVar];
    if (!envVariable) {
        throw new Error(`Porfavor definir el nombre de la variable: ${enVar}`);
    }
    return envVariable;
};
exports.ACKEE_MONGODB = checkEnv("ACKEE_MONGODB");
exports.ACKEE_PORT = checkEnv("ACKEE_PORT");
