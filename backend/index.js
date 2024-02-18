import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';

dotenv.config()
const app = express();
const port = 3000;

app.use(express.json());

const connectURL = process.env.MONGO;

mongoose
    .connect(connectURL)
    .then(()=>{
        console.log("MongoDB is connected to personalBlog");    
    })
    .catch((err)=>{
        console.log(err);
    });

app.use('/backend/user', userRoutes);
app.use('/backend/auth', authRoutes);


app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`);
})