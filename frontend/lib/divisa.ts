import { api3 } from "../service/api";

export interface DivisaPostData {
    detalleDIV: string;
    montoDivisa: number;
    divisa: string;
    pago: string;
}

export const create_Divisa = async (data: DivisaPostData, token: string) => {
    const res = await api3.post("/divisa", data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

export const delete_Divisa = async (admin_id, token: string) => {
    const res = await api3.delete(`/divisa/${admin_id}`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};

export const edit_Divisa = async (data: DivisaPostData, token: string) => {
    const res = await api3.put("/divisa", data, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
};
