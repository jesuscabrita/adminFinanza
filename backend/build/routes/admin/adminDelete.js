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
exports.admin_delete = void 0;
const http_errors_1 = require("http-errors");
const mongoose_1 = require("mongoose");
const is_empty_1 = require("../../util/is_empty");
const admin_model_1 = require("../../model/admin.model");
const admin_delete = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.delete("/:admin_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const { admin_id } = req.params;
        if ((0, is_empty_1.isEmpty)(admin_id)) {
            throw new http_errors_1.BadRequest("identifica para eliminar");
        }
        if (!mongoose_1.Types.ObjectId.isValid(admin_id)) {
            throw new http_errors_1.BadRequest("admin_id debe ser una id válido");
        }
        const product_doc = yield admin_model_1.AdminModel.findById(admin_id);
        if (!product_doc) {
            throw new http_errors_1.NotFound("la cuenta no existe");
        }
        yield admin_model_1.AdminModel.findByIdAndDelete(admin_id);
        return {
            status: "Eliminado",
        };
    }));
});
exports.admin_delete = admin_delete;
