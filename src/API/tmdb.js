import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;

export const APIContainer = {
    config: {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`
        },
    },
    async fetch_popular() {
        try {
            const response = await axios.get('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',this.config);
            return response;
        } catch (error) {
            throw(error);
        }
    },
    async fetch_trending(time_window) {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/${time_window}?language=en-US`,this.config);
            return response;
        } catch (error) {
            throw(error);
        }
    }
}