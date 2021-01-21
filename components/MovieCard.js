import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';
import { getDimensions } from '../helpers/getDimensions';

const MovieCard = ({url}) => {

    const image = { uri: `https://image.tmdb.org/t/p/w500${url}` };
    
    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <View style={styles.container2}>
                    <Text style={styles.text}>jsjsjsjs</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const dimensions = getDimensions();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-end',
    height: dimensions.height / 2,
    width: dimensions.width / 2,
    backgroundColor: "#000000a0"
  },
  container2: {
    flex: 1,
    flexDirection: "column",
    justifyContent: 'flex-start',
    height: dimensions.height / 2,
    width: dimensions.width / 2,
    backgroundColor: "#000000a0"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: dimensions.height / 2,
    width: dimensions.width / 2,
    backgroundColor: "#000000a0"
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0"
  }
});

export default MovieCard;