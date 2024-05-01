import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";

const MovieList = () => {
  return (
    <View style={styles.container}>
      {/* <ScrollView> */}
        <MovieList
          title=""
          fetchUrl="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1"
          numColumns={3}
        />
      {/* </ScrollView> */}
    </View>
  );
};

export default MovieList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    color: "white",
  },
});
