import { config } from "dotenv";
config();

const checkEnv = (enVar: string) => {
    const envVariable = process.env[enVar];
    if (!envVariable) {
        throw new Error(`Porfavor definir el nombre de la variable: ${enVar}`);
    }
    return envVariable;
};

export const ACKEE_MONGODB = checkEnv("ACKEE_MONGODB");
export const ACKEE_PORT = checkEnv("ACKEE_PORT");