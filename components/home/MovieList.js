import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const MovieItem = React.memo(({ item }) => (
  <View style={styles.itemContainer}>
    <Image
      source={{ uri: `https://image.tmdb.org/t/p/original${item.backdrop_path}` }}
      style={styles.movieImage}
    />
    <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
      {item.title}
    </Text>
    <Text style={styles.vote}><Entypo name="star" size={20} color="gold" /> {item.vote_average}</Text>
  </View>
));

const MovieList = ({ title, fetchUrl, horizontal, numColumns }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  function getMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Nzg0MzU2NjRmZGJiMjgxYjc2OWUxZmJkOTkxMjQ4NyIsInN1YiI6IjY0ZjMzN2E2OTdhNGU2MDBmZWE5YmU5MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n24CYl0acIjONMFfAue34f8BvBhimC86nNv3XuZqsTo",
      },
    };

    fetch(fetchUrl, options)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }

  const renderItem = ({ item }) => (
    <MovieItem item={item} />
  );

  return (
    <View style={styles.container}>
      {horizontal &&  <Text style={styles.sectionTitle}><Text>{title}</Text> <AntDesign name="right" size={20} color="white" /></Text>}
      

       {horizontal ? (
        
        <FlatList
          data={movies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          initialNumToRender={10}
        />
      ) : (
        <FlatList
          data={movies}
          numColumns={numColumns}
          showsVerticalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          initialNumToRender={10}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor:"black",
    flex: 1,
    paddingTop: 20,
  },
  sectionTitle:{
    color:"white",
    fontSize:20,
    fontWeight:"600",
    margin:15,
  },
  flatListContent: {
    paddingHorizontal: 5,
  },
  itemContainer: {
    marginBottom: 20,
  },
  movieImage: {
    width: 110,
    height: 160,
    resizeMode: "cover",
    borderRadius: 5,
    marginRight:5,
  },
  title: {
    width:120,
    fontSize: 13,
    fontWeight: "bold",
    marginTop: 10,
    color:"white",
  },
  vote: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});

export default MovieList;
