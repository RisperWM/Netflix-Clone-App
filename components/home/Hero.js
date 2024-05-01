import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const data = [
  { id: 1, image: require("../../assets/prevImage1.jpg") },
  { id: 2, image: require("../../assets/prevImage2.jpeg") },
  { id: 3, image: require("../../assets/prevImage3.jpg") },
  { id: 4, image: require("../../assets/prevImage4.jpg") },
  { id: 5, image: require("../../assets/prevImage5.jpeg") },
  { id: 6, image: require("../../assets/prevImage6.jpeg") },
  { id: 7, image: require("../../assets/prevImage7.jpeg") },
];


const Hero = () => {

  const renderItem = ({ item }) => (
    <Image source={item.image} style={styles.prevImage} />
  );
  return (
        <View style={styles.container}>
          <ImageBackground
          source={require("../../assets/hero-image.jpg")}
          style={[styles.subContainer, { height: (7 / 12) * height }]}
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
          <TouchableOpacity style={styles.info}>
            <AntDesign name="plus" size={24} color="white" />
            <Text style={styles.text2}>My List</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info2}>
            <AntDesign name="caretright" size={24} color="black" />
            <Text style={styles.playText}>Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.info}>
            <Feather name="info" size={24} color="white" />
            <Text style={styles.text2}>Info</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.preview}>
          <Text style={styles.previewText}>Preview</Text>
          <FlatList
            data={data}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.previewImages}
          />
        </View>
        </View>
     
  );
};

export default Hero;

const styles = StyleSheet.create({
  container:{
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
    backgroundColor: "#000000",
  },
  footer: {
    backgroundColor: "#000000",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 30,
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
  info2: {
    flexDirection: "row",
    backgroundColor: "white",
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  playText: {
    fontWeight: "600",
    fontSize: 20,
    paddingLeft: 7,
  },
  preview:{
    backgroundColor:"black",
    padding:10,
  },
  previewText:{
    fontWeight: "600",
    fontSize: 25,
    color:"white",
    marginBottom:10,
    marginTop:10,
  },
  prevImage:{
    borderRadius:50,
    width:120,
    height:120,
    margin:8,
  },
});
