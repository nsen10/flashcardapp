import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "../models/Deck";

export async function getDecksController(req: Request, res: Response) {
    const decks = await Deck.find();
    res.json(decks);
}