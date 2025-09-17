import express from 'express';
import { getMovies, createMovie, showMovies, updateMovie, deleteMovie } from '../controllers/controllers.js';

const router=express.Router();

router.get('/', getMovies);

router.post('/add',createMovie);

router.put('/:id', updateMovie);

router.delete('/delete/:id', deleteMovie);

router.get('/moviesList', showMovies);

export default router;