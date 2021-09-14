import axios from 'axios';

// Base URL > https://sujeitoprogramador.com/r-api/?api=filmes/

// r-api/?api=filmes/ (TODOS OS FILMES)

// r-api/?api=filmes/123 (FILMES COM ID 123)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
});

export default api;