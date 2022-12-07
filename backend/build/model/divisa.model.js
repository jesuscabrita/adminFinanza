"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DivisaModel = void 0;
const mongoose_1 = require("mongoose");
const schema = new mongoose_1.Schema({
    detalleDIV: { type: String, required: true },
    montoDivisa: { type: Number, required: true },
    divisa: { type: String, required: true },
    pago: { type: String },
    user_id: { type: String },
}, { timestamps: true });
exports.DivisaModel = (0, mongoose_1.model)("divisa", schema);
