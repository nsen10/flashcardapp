import express, {Request, Response} from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import Deck from "../models/Deck";

export async function createDeckController (req: Request, res: Response)  {
        const newDeck = new Deck({
            title : req.body.title,
        });
        const createdDeck = await newDeck.save();
        res.json(createdDeck);
}