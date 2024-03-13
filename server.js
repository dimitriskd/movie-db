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
        const reqParam = req.query.req || "movie";
        const config = createAxiosConfig(`https://api.themoviedb.org/3/${reqParam}/popular`, {
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
        const url = `https://api.themoviedb.org/3/trending/all/${reqParam}`;
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

// top rated movies
// const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MjU1ZGFhZTcwM2ZjYWZhMTcxZTQ5Y2MxNGY3MTBkZSIsInN1YiI6IjY1ZTc1MDNjY2VkZTY5MDE4NWJmMGVmMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AAVvp7arcDIaouiQJISn0K3LAgmM-KTqW9aYkpDuCL4'
//     }
//   };
  
//   fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=1000', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));