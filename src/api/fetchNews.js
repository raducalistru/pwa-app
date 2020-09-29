import axios from 'axios';

const URL = 'https://newsapi.org/v2/everything';
const API_KEY = 'e7204eacae514c33a4061be5b0dab50a';

export const fetchNews = async (query) => {
    const { data } = await axios.get(URL, {
        params: {
            q: query,
            apiKey: API_KEY,
        }
    });

    return data;
}