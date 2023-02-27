import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "../models/Deck";

export async function deleteDeckController(req: Request, res: Response) {
        //TODO:
        //1. get the deck id rom the url
        const deckId = req.params.deckId;
        //2. delete the deck from mongo
        const deck = await Deck.findByIdAndDelete(deckId);
        //3. return the deleted deck to the user who request it
        res.json(deck);
}