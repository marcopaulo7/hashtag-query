import express, { Request, Response } from "express";
import * as Controller from "../controller/app.controller";

export const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
    try {
        const hashtag: string = req.query.hashtag as string;
        const tweets = await Controller.searchByHashtag(hashtag);
        if (tweets)
            return res.status(200).send(tweets);
        res.status(404).send("Nenhum tweet encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/authorize/:id", async (req: Request, res: Response) => {
    try {
        const tweets = Controller.authorizeTweet(req.params.id);
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
        const tweets = Controller.discardTweet(req.params.id);
        if (tweets)
            return res.status(200).send(tweets);
        else
            return res.status(404).send("Tweet não encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});
