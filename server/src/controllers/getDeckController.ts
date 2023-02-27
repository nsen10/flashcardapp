import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "../models/Deck";

export async function getDeckController(req: Request, res: Response) {
    const {deckId} = req.params;
    const deck = await Deck.findById(deckId);
    res.json(deck);
}