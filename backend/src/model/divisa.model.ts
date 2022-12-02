import { Document, model, Schema } from "mongoose";

export interface DivisaDocument extends Document {
    detalleDIV: string;
    montoDivisa: number;
    divisa: string;
    pago: string;
    user_id?: string;
}

const schema = new Schema(
    {
        detalleDIV: { type: String, required: true },
        montoDivisa: { type: Number, required: true },
        divisa: { type: String, required: true },
        pago: { type: String },
        user_id: { type: String },
    },
    { timestamps: true }
);

export const DivisaModel = model<DivisaDocument>("divisa", schema);