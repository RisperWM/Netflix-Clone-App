import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Hero from "../components/home/Hero";
import PopularShows from "../components/home/PopularShows";

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroContainer}>
        <Hero />
      </View>
      <View style={styles.popularShowsContainer}>
        <PopularShows />
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
