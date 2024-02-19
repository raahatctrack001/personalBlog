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

//middleware
app.use((err, req, res, next) => {
    const statusCode = err.statuscode || 500;
    const message = err.message || 'Internal Server Error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`);
})