"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app_routes_1 = require("./routes/app.routes");
const dotenv = __importStar(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
dotenv.config();
const app = express_1.default();
const corsOptions = {
    origin: '*',
    credentials: false,
    optionSuccessStatus: 200
};
app.use(cors_1.default(corsOptions));
app.use('/', app_routes_1.router);
app.listen(process.env.PORT, () => console.log(`Servidor iniciado na porta ${process.env.PORT}!`));
