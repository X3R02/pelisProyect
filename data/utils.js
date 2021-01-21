import { config } from './config';
export const apiUrl = `https://api.themoviedb.org/3/movie/${config.selector}?api_key=9e6652e1580b3b6dcf46e8b7348b70c3&language=${config.lang}`;