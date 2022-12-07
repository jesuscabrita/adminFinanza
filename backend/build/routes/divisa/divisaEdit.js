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
exports.divisa_Edit = void 0;
const is_empty_1 = require("../../util/is_empty");
const http_errors_1 = require("http-errors");
const mongoose_1 = require("mongoose");
const divisa_model_1 = require("../../model/divisa.model");
const divisa_Edit = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.put("/:divisa_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { divisa_id } = req.params;
        if ((0, is_empty_1.isEmpty)(divisa_id)) {
            throw new http_errors_1.BadRequest("identifica para editar");
        }
        if (!mongoose_1.Types.ObjectId.isValid(divisa_id)) {
            throw new http_errors_1.BadRequest("divisa_id debe ser una id válido");
        }
        const product_doc = yield divisa_model_1.DivisaModel.findById(divisa_id);
        if (!product_doc) {
            throw new http_errors_1.NotFound("la cuenta no existe");
        }
        yield divisa_model_1.DivisaModel.findByIdAndDelete(divisa_id);
        return {
            status: "Editado",
        };
    }));
});
exports.divisa_Edit = divisa_Edit;
