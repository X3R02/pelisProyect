export const fetchMovies = async () => {
    const apiUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=9e6652e1580b3b6dcf46e8b7348b70c3';
    const res = await fetch(apiUrl);
    const data = await res.json();
    console.log(data);
};