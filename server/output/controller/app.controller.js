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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const twitterService = __importStar(require("../service/twitter.service"));
let cache = {};
exports.searchByHashtag = (hashtag) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        cache = {};
        let result = yield twitterService.getByHashtag(hashtag);
        let formattedData = result.data.map((t) => ({ id: t.id, userId: t.author_id, text: t.text }));
        let userDict = result.includes.users.reduce((a, u) => (Object.assign(Object.assign({}, a), { [u.id]: u })), {}); //Transforma o array de usuários em um dicionário para melhorar 
        //a performance ao preencher o nome de usuário do objeto Tweet
        formattedData.forEach(tweet => {
            tweet.userName = userDict[tweet.userId].username;
            tweet.name = userDict[tweet.userId].name;
            tweet.imgUrl = userDict[tweet.userId].profile_image_url;
            cache[tweet.id] = tweet;
        });
        return cache;
    }
    catch (e) {
        return;
    }
});
exports.authorizeTweet = (id) => {
    let tweet = cache[id];
    if (tweet == undefined)
        return false;
    console.log(`Tweet enviado para a tela! @${tweet.userName}|${tweet.text}`);
    cache[id] = undefined;
    return cache;
};
exports.discardTweet = (id) => {
    let tweet = cache[id];
    if (tweet == undefined)
        return false;
    cache[id] = undefined;
    return cache;
};
