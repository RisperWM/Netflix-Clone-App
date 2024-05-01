import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

const Hero = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require("../../assets/hero-image.jpg")}
          style={[styles.subContainer, { height: (5 / 7) * height }]}
        >
          <LinearGradient
            colors={["rgba(0,0,0,0)", "rgba(0,0,1,1)"]}
            style={styles.gradient}
          >
            <View style={styles.navlinks}>
              <Image
                source={require("../../assets/vector_logo.png")}
                style={styles.logoImage}
              />
              <TouchableOpacity>
                <Text style={styles.text}>TV Shows</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>Movies</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text style={styles.text}>My List</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
        <View style={styles.rank}>
          <Text style={styles.text2}>#2 in Kenya today</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.info}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={styles.text2}>My List</Text>
          </View>
          <View style={styles.info}>
            <AntDesign name="youtube" size={54} color="white" />
          </View>
          <View style={styles.info}>
            <Feather name="info" size={24} color="white" />
            <Text style={styles.text2}>Info</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hero;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subContainer: {
    resizeMode: "cover",
  },
  gradient: {
    flex: 1,
  },
  navlinks: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
  },
  logoImage: {
    height: 20,
    width: 20,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
  rank: {
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor:"#000000",
  },
  footer: {
    backgroundColor:"#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    paddingBottom: 20,
  },
  info: {
    justifyContent: "center",
    alignItems: "center",
  },
  text2: {
    color: "white",
    fontSize: 15,
    fontWeight: "700",
  },
});
