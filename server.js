const PORT =  8000
import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());

app.get('/popular', (req,res) => {
    const config = {
        method: "GET",
        url: 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_API_KEY}`
        }
    }

    axios.request(config).then((response) => {
        res.json(response.data);
    }).catch(error => {
        console.error(error);
    })
})

app.get('/trending', (req,res) => {
    const reqParam = req.query.req || 'day';
    const config = {
        method: "GET",
        url: `https://api.themoviedb.org/3/trending/movie/${reqParam}?language=en-US`,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.REACT_API_KEY}`
        }
    }

    axios.request(config).then((response) => {
        res.json(response.data);
    }).catch(error => {
        console.error(error);
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`));