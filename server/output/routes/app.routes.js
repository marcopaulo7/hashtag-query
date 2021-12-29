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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller = __importStar(require("../controller/app.controller"));
exports.router = express_1.default.Router();
exports.router.get("/search", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const hashtag = req.query.hashtag;
    try {
        const tweets = yield Controller.searchByHashtag(hashtag);
        if (tweets)
            return res.status(200).send(tweets);
        res.status(404).send("Nenhum tweet encontrado.");
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
exports.router.patch("/authorize", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = Controller.authorizeTweet(req.query.id);
        if (success)
            return res.sendStatus(204);
        else
            return res.status(404).send("Tweet não encontrado.");
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
exports.router.delete("/discard", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const success = Controller.discardTweet(req.query.id);
        if (success)
            return res.sendStatus(204);
        else
            return res.status(404).send("Tweet não encontrado.");
    }
    catch (e) {
        res.status(500).send(e);
    }
}));
