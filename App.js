import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signup from "./screens/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import BottomNavigation from "./screens/BottomNavigation";
import TvShowsList from "./screens/TvShowsList";
import MovieList from "./screens/MovieList";
import MyList from "./screens/MyList";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomNavigation"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="TvShowList"
          component={TvShowsList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            title: "TV Shows",
          }}
        />
        <Stack.Screen
          name="MovieList"
          component={MovieList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            title: "Movies",
          }}
        />
        <Stack.Screen
          name="MyList"
          component={MyList}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: "black" },
            headerTintColor: "white",
            headerTitleStyle: { fontWeight: "bold" },
            title: "My Collection",
          }}
        />
        <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
