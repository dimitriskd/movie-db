import axios from "axios";
const api_key = import.meta.env.VITE_API_KEY;

export const APIContainer = {
    config: {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${api_key}`
        }
    },
    async searchBox(query){
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, this.config);
            console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    }
}