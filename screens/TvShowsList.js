import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import MovieList from "../components/home/MovieList";

const TvShowsList = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
        <MovieList
          title=""
          fetchUrl="https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1"
          numColumns={3}
        />
      {/* </ScrollView> */}
    </View>
  );
};

export default TvShowsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
});
