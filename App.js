import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import MoviesListScreen from './Screens/MoviesListScreen';
import MovieDetailsScreen from './Screens/MovieDetailsScreen';
import FavoritesScreen from './Screens/FavoritesScreen';
const Stack = createStackNavigator();

function MoviesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Peliculas" component={MoviesListScreen} />
      <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
    </Stack.Navigator>
  );
}

function FavoritesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Favoritos" component={FavoritesScreen} />
    </Stack.Navigator>
  );
}
const Tab = createBottomTabNavigator();

function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Peliculas') {
            iconName = focused ? 'movie-open' : 'movie';
            return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
          } else if (route.name === 'Favoritos') {
            iconName = focused ? 'heart' : 'heart-outline';
            return <Ionicons name={iconName} size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Peliculas" component={MoviesStack} />
      <Tab.Screen name="Favoritos" component={FavoritesStack} />
    </Tab.Navigator>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <AppTabs />
    </NavigationContainer>
  );
}