import React from 'react';
import { ImageBackground, Text, View, StyleSheet } from 'react-native';

const MovieCard = ({url}) => {

    const image = { uri: `https://image.tmdb.org/t/p/w500${url}` };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} style={styles.image}>
                <Text style={styles.text}>jsjsjsjs</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height: 50,
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