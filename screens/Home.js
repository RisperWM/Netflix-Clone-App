import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Hero from "../components/home/Hero";
import MovieList from "../components/home/MovieList";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Hero />
      </View>
      <View style={styles.popularShowsContainer}>
        <MovieList
          title="Now Playing"
          fetchUrl="https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1"
          />
        <MovieList
          title="Popular Shows"
          fetchUrl="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
        />
         <MovieList
          title="Top Rated Shows"
          fetchUrl="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
        />
         <MovieList
        title="New & Upcoming Shows"
        fetchUrl="https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heroContainer: {
    flex: 1,
  },
});
