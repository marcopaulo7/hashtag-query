// Search for Tweets within the past seven days
// https://developer.twitter.com/en/docs/twitter-api/tweets/search/quick-start/recent-search

import needle from 'needle';
import * as dotenv from "dotenv";
dotenv.config();

const token = process.env.BEARER_TOKEN;
const endpointUrl = "https://api.twitter.com/2/tweets/search/recent";

export const getByHashtag = async (hashtag: String) => {
    const params = {
        'query': `#${hashtag}  -is:retweet`,
        'expansions': 'author_id',
        'user.fields': 'profile_image_url'
    }

    const res = await needle('get', endpointUrl, params, {
        headers: {
            "User-Agent": "v2RecentSearchJS",
            "authorization": `Bearer ${token}`
        }
    })

    if (res.body)
        return res.body;
    else
        throw new Error('Request inválido');
};