import {config} from "dotenv";
config();

import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "./models/Deck";

const app = express();
const PORT = 5000;

app.use(cors({
    origin: "*",
}));
app.use(express.json());

app.get("/decks", async (req: Request, res: Response) => {
    //TODO: fetch all decks and send back to user
    //1.how do we fetch the decks from mongo?
    const decks = await Deck.find();
    //2.how do we send back the array to the ui?
    res.json(decks);
});

app.post("/decks", async (req: Request, res: Response) => {
    const newDeck = new Deck({
        title : req.body.title,
    });
    const createdDeck = await newDeck.save();
    res.json(createdDeck);
});

app.delete("/decks/:deckId", async (req: Request, res: Response) => {
    //TODO:
    //1. get the deck id rom the url
    const deckId = req.params.deckId;
    //2. delete the deck from mongo
    const deck = await Deck.findByIdAndDelete(deckId);
    //3. return the deleted deck to the user who request it
    res.json(deck);
});

mongoose
    .connect(process.env.MONGO_URL!)
    .then(() => {
        console.log(`listening on port ${PORT}`);
        app.listen(PORT);
})

