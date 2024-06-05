import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
})

export default api;
// URL da API: /movie/now_playing?api_key=${apiKey}&language=pt-BR
