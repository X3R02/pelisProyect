import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import MovieScreen from './screens/MovieScreen';
import { Button } from 'react-native';

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MainScreen}
          options={headerOptions}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={headerOptions}  
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const headerOptions = {
  headerStyle: {
    backgroundColor: '#1a1a1a',
  },
  headerTintColor: '#fff',
  headerRight: () => (
    <Button
      onPress={() => alert('This is a button!')}
      title="opciones"
      color="#1a1a1a"
    />
  ),
};