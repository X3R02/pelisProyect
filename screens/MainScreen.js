import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import MovieCard from '../components/MovieCard';
import { apiUrl } from '../data/utils';
import { useFetchMovies } from '../hooks/useFetchMovies';

const MainScreen = ({navigation}) => {

    const movies = useFetchMovies(apiUrl);
    console.log(movies);

    return (
        <ScrollView>
            {
                movies.loading ?
                <Text>Por favor espere</Text> :
                movies.data.results.map((movie) => (
                    <MovieCard key={movie.id} url={movie.poster_path}/>
                ))
            }
        </ScrollView>
    );
};

export default MainScreen;