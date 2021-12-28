import express, { Request, Response } from "express";
import * as Controller from "../controller/app.controller";

export const router = express.Router();

router.get("/search", async (req: Request, res: Response) => {
    const hashtag: string = <string> req.query.hashtag;

    try {
        const tweets = await Controller.searchByHashtag(hashtag);

        if (tweets) 
            return res.status(200).send(tweets);
        res.status(404).send("Nenhum tweet encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});

router.patch("/authorize", async (req: Request, res: Response) => {
    try {
        const success: Boolean = Controller.authorizeTweet(<string> req.query.id);

        if (success) 
            return res.sendStatus(204);
        else
            return res.status(404).send("Tweet não encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});

router.delete("/discard", async (req: Request, res: Response) => {
    try {
        const success: Boolean = Controller.discardTweet(<string> req.query.id);

        if (success) 
            return res.sendStatus(204);
        else
            return res.status(404).send("Tweet não encontrado.");
    } catch (e) {
        res.status(500).send(e);
    }
});