import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to mongoDB!')
    } catch (error) {
        handleError(error);
    }
}

app.listen(3001, ()=> {
    connect();
    console.log(`Server is running`)
})