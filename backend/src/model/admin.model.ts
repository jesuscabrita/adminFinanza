import { Document, model, Schema } from "mongoose";
import { DivisaDocument } from "./divisa.model";

export interface AdminDocument extends Document {
    detalleARS: string;
    monto: number;
    tipo: string;
    pago: string;
    user_id?: string;
    divisa: DivisaDocument['_id']
}

const schema = new Schema(
    {
        detalleARS: { type: String, required: true },
        monto: { type: Number, required: true },
        tipo: { type: String, required: true },
        pago: { type: String },
        user_id: { type: String },
        divisa:{ type : Schema.Types.ObjectId, ref:'divisa'}
    },
    { timestamps: true }
);

export const AdminModel = model<AdminDocument>("admin", schema);
