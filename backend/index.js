import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config()

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());

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

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})
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