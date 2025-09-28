import express from 'express';
import router from './routes/movieRoutes.js';
import connectDB from './lib/db.js';
import rateLimit from 'express-rate-limit';

const app=express();  //Create express app
const PORT=3000;

//Rate Limiter
const ratelimiter=rateLimit({   
    windowMs:3*1000,
    max:5,
    message:"Too many requests"
})

//Middlewares
app.use(ratelimiter); //Apply rate limiter to all requests
app.use(express.json()); //To parse JSON request bodies
app.use(express.urlencoded({extended:true}));  //To parse URL-encoded request bodies

//Connect to Database
connectDB();

//Routes
app.get("/", (req,res)=>{
    res.send("Welcome to Movie Database API");
})

app.use("/movies", router);

//Start the server
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
