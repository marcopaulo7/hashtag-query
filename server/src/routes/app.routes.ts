import express, { Request, Response } from "express";
import * as Controller from "../controller/app.controller";

export const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
    const hashtag: string = <string> req.query.hashtag;

    try {
        const tweets = await Controller.searchByHashtag(hashtag);
        res.header("Access-Control-Allow-Origin", "*");
        if (tweets) 
            return res.status(200).send(tweets);
        res.status(404).send("Nenhum tweet encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/authorize/:id", async (req: Request, res: Response) => {
    try {
        const tweets = Controller.authorizeTweet(<string> req.params.id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

        if (tweets) 
            return res.status(200).send(tweets);
        else
            return res.status(404).send("Tweet não encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete("/discard:id", async (req: Request, res: Response) => {
    try {
        const tweets = Controller.discardTweet(<string> req.params.id);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
        res.header("Access-Control-Allow-Headers", "Origin, Content-Type, X-Auth-Token");

        if (tweets) 
            return res.status(200).send(tweets);
        else
            return res.status(404).send("Tweet não encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});
