import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

function createAxiosConfig(url, params) {
    return {
        method: "GET",
        url,
        params,
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.API_KEY}`
        }
    };
}

app.get('/popular', async (req, res, next) => {
    try {
        const config = createAxiosConfig('https://api.themoviedb.org/3/movie/popular', {
            language: 'en-US',
            page: 1
        });
        const response = await axios.request(config);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

app.get('/trending', async (req, res, next) => {
    try {
        const reqParam = req.query.req || 'day';
        const url = `https://api.themoviedb.org/3/trending/movie/${reqParam}`;
        const config = createAxiosConfig(url, { language: 'en-US' });
        const response = await axios.request(config);
        res.json(response.data);
    } catch (error) {
        next(error);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});