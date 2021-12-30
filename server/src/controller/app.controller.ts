import { Tweet } from "../model/app.model";
import * as twitterService from "../service/twitter.service"

let cache: { [id: string]: Tweet | undefined } = {}

export const searchByHashtag = async (hashtag: String) => {
    try {
        cache = {}
        let result = await twitterService.getByHashtag(hashtag);

        let formattedData: Tweet[] = result.data.map((t: TwitterData) => <Tweet>{ id: t.id, userId: t.author_id, text: t.text });
        let userDict = result.includes.users.reduce((a: any, u: TwitterUser) => ({ ...a, [u.id]: u }), {}); //Transforma o array de usuários em um dicionário para melhorar 
                                                                                                            //a performance ao preencher o nome de usuário do objeto Tweet
        formattedData.forEach(tweet => {
            tweet.userName = userDict[tweet.userId].username
            tweet.name = userDict[tweet.userId].name
            tweet.imgUrl = userDict[tweet.userId].profile_image_url
            cache[tweet.id] = tweet
        });

        return cache;
    }
    catch (e) {
        return;
    }
};


export const authorizeTweet = (id: string) => {
    let tweet = cache[id];
    if (tweet == undefined) return false;
    console.log(`Tweet enviado para a tela! @${tweet.userName}|${tweet.text}`)
    cache[id] = undefined;
    return cache;
};

export const discardTweet = (id: string) => {
    let tweet = cache[id];
    if (tweet == undefined) return false;
    cache[id] = undefined;
    return cache;
};
