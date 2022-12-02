import useSWR from "swr";

export interface divisa {
    detalleDIV: string;
    montoDivisa: number;
    divisa: string;
    pago: string;
    _id: string;
}

export const useDivisa = () => {
    const swr = useSWR<divisa[]>("/divisa", {
        refreshInterval: 3000,
    });
    return swr;
};
