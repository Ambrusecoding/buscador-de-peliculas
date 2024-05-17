// src/api/tmdb.js
import axios from 'axios';

const API_KEY = "41a01a2c901ea58c410d3231d9b79f02";
console.log("TMDB API Key:", API_KEY); // Agrega esta línea para depurar
const BASE_URL = 'https://api.themoviedb.org/3';

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default tmdb;
