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
Object.defineProperty(exports, "__esModule", { value: true });
exports.admin_Edit = void 0;
const admin_model_1 = require("../../model/admin.model");
const admin_Edit = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.put("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        req.log.info("Editado");
        console.log(data);
        const { detalleARS, monto, tipo, pago } = data;
        const doc = yield admin_model_1.AdminModel.updateOne({
            detalleARS,
            monto,
            tipo,
            pago,
            user_id: req.user.sub,
        }, { detalleARS,
            monto,
            tipo,
            pago: 'si',
            user_id: req.user.sub, });
        return {
            status: "Editado",
        };
    }));
});
exports.admin_Edit = admin_Edit;
