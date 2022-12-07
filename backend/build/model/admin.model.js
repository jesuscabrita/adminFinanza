"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    detalleARS: { type: String, required: true },
    monto: { type: Number, required: true },
    tipo: { type: String, required: true },
    pago: { type: String },
    user_id: { type: String },
    divisa: { type: mongoose_1.Schema.Types.ObjectId, ref: 'divisa' }
}, { timestamps: true });
exports.AdminModel = (0, mongoose_1.model)("admin", schema);
