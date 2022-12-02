import { api } from "./api";

export const useEvolucionDolarOficial = async () => {
    try {
        const data = await api.get("/apievoluciondolaroficial").then((res) => res.data);
        return data;
    } catch (err) {
        throw new Error(err);
    }
};
export const useEvolucionDolarBlue = async () => {
    try {
        const data = await api.get("/apievoluciondolarblue").then((res) => res.data);
        return data;
    } catch (err) {
        throw new Error(err);
    }
};

