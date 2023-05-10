import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter((fav) => fav !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };

  const movies = [
    { id: '1', title: 'Rapidos y furiosos', year: '1994' },
    { id: '2', title: 'Las aventuras del Pato Lucas', year: '1972' },
    { id: '3', title: 'The Dark Knight', year: '2008' },
    { id: '4', title: 'Cenicienta', year: '1957' },
    { id: '5', title: "Schindler's List", year: '1993' },
    { id: '6', title: 'The Lord of the Rings: The Return of the King', year: '2003' },

  ];

  const renderMovie = ({ item }) => {
    const isFavorite = favorites.includes(item.id);
    return (
      <TouchableOpacity style={styles.movieContainer} onPress={() => toggleFavorite(item.id)}>
        <Text style={styles.movieTitle}>{item.title}</Text>
        <Ionicons name={isFavorite ? 'heart' : 'heart-outline'} size={24} color={isFavorite ? '#FF5B5B' : '#000'} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={movies} renderItem={renderMovie} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingVertical: 16,
  },
  movieContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    backgroundColor: '#FFF',
    elevation: 2,
  },
  movieTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default FavoritesScreen;
