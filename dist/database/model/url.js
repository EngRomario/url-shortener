"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const shortSchema = new Schema({
    shortURL: { type: "string", required: true },
    hash: { type: "string", required: true },
    originURL: { type: "string", required: true },
});
exports.URLModel = mongoose_1.default.model("URL", shortSchema);
//# sourceMappingURL=url.js.map