import React from 'react';
import { Button, ScrollView, Text } from 'react-native';
import { fetchMovies } from '../helpers/fetchMovies';

const MainScreen = ({navigation}) => {

    fetchMovies();

    return (
        <ScrollView>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Movie')}
            />
        </ScrollView>
    );
};

export default MainScreen;