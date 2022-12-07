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
exports.divisa_get = void 0;
const http_errors_1 = require("http-errors");
const divisa_model_1 = require("../../model/divisa.model");
const divisa_get = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.get("/:divisa_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { divisa_id } = req.params;
        req.log.info(`Fetching receta ${divisa_id}`);
        const doc = yield divisa_model_1.DivisaModel.findById(divisa_id);
        if (!doc) {
            throw new http_errors_1.NotFound("Divisa no encontrada");
        }
        return doc;
    }));
});
exports.divisa_get = divisa_get;
