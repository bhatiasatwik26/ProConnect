import express from 'express';
import { connectDB } from './database/connect.db.js';
import dotenv from 'dotenv';
import authRouter from './routes/auth.route.js'
// import cors from 'cors';
dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use('/api/auth', authRouter);
// app.use(cors());

app.listen(PORT, ()=>{
    connectDB();
    console.log('Server up and running at port:', PORT);
})

app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        sucess:false,
        statusCode,
        message
    })
})
