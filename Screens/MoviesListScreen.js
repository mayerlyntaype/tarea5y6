import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const movies = [
  { id: '1', title: 'Rapidos y furiosos', year: '1994', director: 'Frank Darabont' },
  { id: '2', title: 'Las aventuras del Pato Lucas', year: '1972', director: 'Francis Ford Coppola' },
  { id: '3', title: 'The Dark Knight', year: '2008', director: 'Christopher Nolan' },
  { id: '4', title: 'Cenicienta', year: '1993', director: 'Steven Spielberg' },
  { id: '5', title: 'Forrest Gump', year: '1994', director: 'Robert Zemeckis' },
  { id: '6', title: 'The Lord of the Rings: The Return of the King', year: '2003', director: 'Peter Jackson' },
];

function MoviesListScreen() {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.details}>{item.year} - {item.director}</Text>
    </View>
  );

  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  details: {
    fontSize: 16,
  },
});

export default MoviesListScreen;
