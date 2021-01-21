import React from 'react';
import { Button, ScrollView, Text } from 'react-native';

const MainScreen = ({navigation}) => {
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