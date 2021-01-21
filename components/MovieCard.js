import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { getDimensions } from '../helpers/getDimensions';
import { useOrientation } from '../hooks/useOrientation';

const MovieCard = React.memo(({url, movie, stateMovie}) => {

    const navigation = useNavigation();
    const orientation = useOrientation();
    const image = {
      uri: `https://image.tmdb.org/t/p/w500${url}`,
      cache: 'only-if-cached'
    };

    const navigateToMovie = () => {
      stateMovie?.setMovie(movie);
      if(orientation === 'PORTRAIT') {
        try {
          return navigation.navigate('Movie', movie);
        } catch (err) {
          return;
        }
      }
    };
    
    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.container}
            onPress={navigateToMovie}
          >
              <Image source={image} style={styles.image}/>
          </TouchableOpacity>
        </View>
    );
});

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: dimensions.height / 2,
    width: dimensions.width / 2,
  },
  image: {
    height: dimensions.height / 2,
    width: dimensions.width / 2,
  },
});

export default MovieCard;