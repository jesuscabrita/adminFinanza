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
exports.admin_create = void 0;
const http_errors_1 = require("http-errors");
const admin_model_1 = require("../../model/admin.model");
const is_empty_1 = require("../../util/is_empty");
const admin_create = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const data = req.body;
        req.log.info("Output");
        console.log(data);
        const { detalleARS, monto, tipo, pago } = data;
        if ((0, is_empty_1.isEmpty)(detalleARS)) {
            throw new http_errors_1.BadRequest("Detalle no definido");
        }
        if ((0, is_empty_1.isEmpty)(tipo)) {
            throw new http_errors_1.BadRequest("Tipo no definido");
        }
        if ((0, is_empty_1.isEmpty)(pago)) {
            throw new http_errors_1.BadRequest("Pago no definido");
        }
        const doc = yield admin_model_1.AdminModel.create({
            detalleARS,
            monto,
            tipo,
            pago,
            user_id: req.user.sub,
        });
        return doc;
    }));
});
exports.admin_create = admin_create;
