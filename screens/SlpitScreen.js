import React, { useState } from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { apiUrl } from '../data/utils';
import { getDimensions } from '../helpers/getDimensions';
import MainScreen from './MainScreen';

const SlpitScreen = (props) => {

    const [movie, setMovie] = useState();

    const image = {
        uri: `https://image.tmdb.org/t/p/w500${movie?.backdrop_path}`,
        cache: 'only-if-cached'
    };

    props.route.params = {
        apiUrl: apiUrl,
        movie: {
            movie, setMovie
        }
    };
    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <MainScreen {...props}/>
            </View>
            <View style={styles.screen}>
                <Text style={styles.title}>
                    {movie?.original_title}
                </Text>
                <Text style={styles.ratingText}>
                    Rating: {movie?.vote_average}   Release Date: {movie?.release_date}
                </Text>
                <Text style={styles.sinopsis}>
                    {movie?.overview}
                </Text>
            </View>
        </View>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    screen: {
        width: (dimensions.height / 2),
        flex: 1,
        flexDirection: 'column'
    },
    title: {
      color: '#fff',
      fontSize: 32,
      height: 150,
      width: dimensions.width / 2,
      backgroundColor: '#000000aa',
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingTop: 60,
    },
    ratingText: {
      color: '#fff',
      fontSize: 20,
      height: 90,
      width: dimensions.width / 2,
      backgroundColor: '#000000aa',
      textAlignVertical: 'center',
      paddingLeft: 15,
    },
    sinopsis: {
      color: '#717171',
      fontSize: 20,
      width: dimensions.width / 2,
      textAlignVertical: 'center',
      padding: 25,
    }
});

export default SlpitScreen;