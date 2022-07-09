"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const path_1 = __importDefault(require("path"));
exports.config = {
    API_URL: "http://localhost:5000",
    MONGO_CONNECT_URL: "mongodb+srv://romariopmarinho:taXKLbdlHvtf9dI0@url-shortener-dio.b1nfe.mongodb.net/?retryWrites=true&w=majority",
    NOT_FOUND: path_1.default.join(__dirname, "..", "NotFound.html"),
};
exports.default = exports.config;
//# sourceMappingURL=Constants.js.map