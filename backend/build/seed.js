"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const admin_model_1 = require("./model/admin.model");
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield mongoose_1.default.connect('mongodb+srv://jesuscabrita:22338932@adminfinanza.5o18we7.mongodb.net/adminFinanza');
    // Elimina todos los product en la colección de mongodb
    try {
        yield admin_model_1.AdminModel.collection.drop();
    }
    catch (error) {
        console.log("No se puede eliminar la colección que no existe");
    }
    // Create some product
    yield admin_model_1.AdminModel.create([
        {
            detalleARS: 'Alquiler',
            monto: 28000,
            tipo: '-',
            pago: 'no',
            user_id: 'jesuscabrita',
        },
        {
            detalleARS: 'Expesas',
            monto: 13600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Comida',
            monto: 3600,
            tipo: '+',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Salidas',
            monto: 43600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Futbol',
            monto: 2600,
            tipo: '-',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Sueldo',
            monto: 172600,
            tipo: '+',
            pago: 'no',
            user_id: 'google-oauth2|103458595165102849980',
        },
        {
            detalleARS: 'Viajes',
            monto: 2172600,
            tipo: '-',
            pago: 'no',
            user_id: 'eleanaguillen',
        },
    ]);
    console.log("LISTO..!");
    yield mongoose_1.default.disconnect();
}))();
