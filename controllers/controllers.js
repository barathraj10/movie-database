import movie from "../models/movie.model.js";

export const getMovies=async (req,res)=>{
    try{
        const movies=await movie.find();
        res.json(movies);
    }catch(err){
        res.status(500).json({message:err.message});//Internal Server Error
    }
}

export const createMovie= async (req,res)=>{

    const newMovie = new movie({
        title: req.body.title,
        desc: req.body.desc
    })

    try{
        const Movie = await newMovie.save();
        return res.status(201).json(Movie);
    }
    catch(err){
        res.status(400).json({message : err.message});
    }

    res.send("Movie Added Successfully");
}

export const getMovieDetail=async (req,res)=>{
    
    const ID=req.params.id;
    
    try{
        const movieDetails=await movie.findById(ID);
        
        if(!movieDetails){
            res.status(404).json({message : 'Movie Not Found'});
        }
        else{
            res.json(movieDetails);
        }
    }catch(e){
        res.status(500).json({message: 'Internal Server Error'});
    }
}

export const updateMovie=async (req,res)=>{
    
    const ID=req.params.id;
    try{
        const toUpdate = await movie.findById(ID);
        if(!toUpdate){
            return res.status(404).json({message : 'Movie Not Found'});
        }
        
            toUpdate.title=req.body.title;
            toUpdate.desc=req.body.desc;
            await toUpdate.save();

            res.status(200).json(toUpdate);
            console.log("Movie Updated Successfully");
        
    }
    catch(e){
        res.status(500).json({message: 'Internal Server Error (updateMovie)'});
    }
}

export const deleteMovie = async (req,res)=>{
    
    const ID=req.params.id;

    try{
        const toDelete = await movie.findByIdAndDelete(ID);
        if(!toDelete){
            return res.status(404).json({message : 'Movie Not Found'});
        }
        res.status(200).json({message : 'Movie Deleted Successfully'});

    }catch(error){
        res.status(500).json({messaeg : 'Internal Server Error'});
    }
}