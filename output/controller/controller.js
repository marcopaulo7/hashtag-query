"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.discardTweet = exports.authorizeTweet = exports.searchByHashtag = void 0;
const twitterService = __importStar(require("../service/twitter.service"));
const cache = {};
const searchByHashtag = (hashtag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let result = yield twitterService.getByHashtag(hashtag);
        let formattedData = result.data.map((t) => ({ id: t.id, userId: t.author_id, text: t.text }));
        let userDict = result.includes.users.reduce((a, u) => (Object.assign(Object.assign({}, a), { [u.id]: u })), {});
        formattedData.forEach(tweet => {
            tweet.userName = userDict[tweet.userId].username;
            cache[tweet.id] = tweet;
        });
        return cache;
    }
    catch (e) {
        return;
    }
});
exports.searchByHashtag = searchByHashtag;
const authorizeTweet = (id) => {
    let tweet = cache[id];
    if (tweet == undefined)
        return false;
    console.log(`Tweet enviado para a tela! @${tweet.userName}|${tweet.text}`);
    //send to database
    cache[id] = undefined;
    return true;
};
exports.authorizeTweet = authorizeTweet;
const discardTweet = (id) => {
    let tweet = cache[id];
    if (tweet == undefined)
        return false;
    cache[id] = undefined;
    return true;
};
exports.discardTweet = discardTweet;
