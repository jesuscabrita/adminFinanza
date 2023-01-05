import { Document, model, Schema } from "mongoose";

export interface AdminDocument extends Document {
    detalleARS: string;
    monto: number;
    tipo: string;
    pago: string;
    user_id?: string;
}

const schema = new Schema(
    {
        detalleARS: { type: String, required: true },
        monto: { type: Number, required: true },
        tipo: { type: String, required: true },
        pago: { type: String },
        user_id: { type: String },
    },
    { timestamps: true }
);

export const AdminModel = model<AdminDocument>("admin", schema);
