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
exports.app = void 0;
const cors_1 = __importDefault(require("@fastify/cors"));
const db_1 = require("./database/db");
const adminGet_1 = require("./routes/admin/adminGet");
const adminList_1 = require("./routes/admin/adminList");
const fastify_auth0_verify_1 = __importDefault(require("fastify-auth0-verify"));
const adminDelete_1 = require("./routes/admin/adminDelete");
const adminCreate_1 = require("./routes/admin/adminCreate");
const divisaList_1 = require("./routes/divisa/divisaList");
const divisaGet_1 = require("./routes/divisa/divisaGet");
const divisaDelete_1 = require("./routes/divisa/divisaDelete");
const divisaCreate_1 = require("./routes/divisa/divisaCreate");
const adminEdit_1 = require("./routes/admin/adminEdit");
const divisaEdit_1 = require("./routes/divisa/divisaEdit");
const admin_plugin = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.addHook("preValidation", app.authenticate);
    app.register(adminList_1.admin_list);
    app.register(adminGet_1.admin_get);
    app.register(adminDelete_1.admin_delete);
    app.register(adminCreate_1.admin_create);
    app.register(adminEdit_1.admin_Edit);
});
const divisa_plugin = (app) => __awaiter(void 0, void 0, void 0, function* () {
    app.addHook("preValidation", app.authenticate);
    app.register(divisaList_1.divisa_list);
    app.register(divisaGet_1.divisa_get);
    app.register(divisaDelete_1.divisa_delete);
    app.register(divisaCreate_1.divisa_create);
    app.register(divisaEdit_1.divisa_Edit);
});
const app = (app) => __awaiter(void 0, void 0, void 0, function* () {
    yield app.register(fastify_auth0_verify_1.default, {
        domain: "dev-jesuscabrita.us.auth0.com",
        audience: "admin",
    });
    app.register(db_1.db_plugin);
    app.register(cors_1.default);
    app.register(admin_plugin, { prefix: "/admin" });
    app.register(divisa_plugin, { prefix: "/divisa" });
});
exports.app = app;
