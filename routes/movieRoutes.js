import express from 'express';
import { getMovies, createMovie, getMovieDetail, updateMovie, deleteMovie } from '../controllers/controllers.js';

const router=express.Router();

router.get('/', getMovies);

router.get('/id/:id', getMovieDetail);

router.post('/add',createMovie);

router.put('/update/:id', updateMovie);

router.delete('/delete/:id', deleteMovie);


export default router;