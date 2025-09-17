import express from 'express';
import router from './routes/movieRoutes.js';
import connectDB from './lib/db.js';

const app=express();
const PORT=3000;

connectDB();

app.use("/movies", router);

app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));