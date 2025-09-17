export const getMovies=(req,res)=>{
    res.send(`Hi Everyone! Welcome to Movie Areas API`);
}

export const createMovie=(req,res)=>{
    // id++;
    // const {name,rating,year}=req.body;
    // movies.push({id, name, rating, year});
    res.send("Movie Added Successfully");
}

export const showMovies=(req,res)=>{
    res.json(movies);
}

export const updateMovie=(req,res)=>{
    res.send("Movie Updated Successfully");
}

export const deleteMovie=(req,res)=>{
    res.send("Movie Deleted Successfully");
}