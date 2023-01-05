import { Document, model, Schema } from "mongoose";

export interface CalificacionDocument extends Document {
    comentario: string;
    valor: number;
    user_id?: string;
}

const schema = new Schema(
    {
        comentario: { type: String, required: true },
        valor: { type: Number, required: true },
        user_id: { type: String },
    },
    { timestamps: true }
);

export const CalificacionModel = model<CalificacionDocument>("calificacion", schema);