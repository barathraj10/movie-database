import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.DB_URI);
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.error("Error connecting to MongoDB:", err.message);
        process.exit(1);
    }
}

export default connectDB;

// user=movie-db
//pass - movieDB

// mongodb+srv://movie-db:movieDB@movie-database.kppdu3e.mongodb.net/?retryWrites=true&w=majority&appName=movie-database