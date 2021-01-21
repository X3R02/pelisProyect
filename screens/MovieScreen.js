import React from 'react';
import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getDimensions } from '../helpers/getDimensions';

const MovieScreen = ({route}) => {

    if(!route?.params?.backdrop_path) {
        return (
            <Text>Nothing selected</Text>
        );
    }

    const params = route.params;
    const image = {
        uri: `https://image.tmdb.org/t/p/w500${params.backdrop_path}`,
        cache: 'only-if-cached'
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground
                    source={image}
                    style={styles.image}
                >
                    <Text style={styles.title}>
                        {params.original_title}
                    </Text>
                    <Text style={styles.ratingText}>
                        Rating: {params.vote_average}   Release Date: {params.release_date}
                    </Text>
                </ImageBackground>
                <Text style={styles.sinopsis}>
                    {params.overview}
                </Text>
            </View>
        </ScrollView>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column"
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    height: 240,
    width: dimensions.width,
    backgroundColor: '#bf42f5',
  },
  title: {
    color: '#fff',
    fontSize: 32,
    height: 150,
    width: dimensions.width,
    backgroundColor: '#000000aa',
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingTop: 60,
  },
  ratingText: {
    color: '#fff',
    fontSize: 20,
    height: 90,
    width: dimensions.width,
    backgroundColor: '#000000aa',
    textAlignVertical: 'center',
    paddingLeft: 15,
  },
  sinopsis: {
    color: '#717171',
    fontSize: 20,
    width: dimensions.width,
    textAlignVertical: 'center',
    padding: 25,
  }
});

export default MovieScreen;