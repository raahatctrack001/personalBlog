import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express();
const port = 3000;

const connectURL = process.env.MONGO;

mongoose
    .connect(connectURL)
    .then(()=>{
        console.log("MongoDB is connected to personalBlog");    
    })
    .catch((err)=>{
        console.log(err);
    });

app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`);
})