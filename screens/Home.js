import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import Hero from "../components/home/Hero";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Hero />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
