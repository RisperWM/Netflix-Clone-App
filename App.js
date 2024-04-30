import { NavigationContainer } from "@react-navigation/native"; 
import React from "react";
import Signup from "./screens/Signup";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Home from "./screens/Home";
import BottomNavigation from "./screens/BottomNavigation";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName='Signup' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
        </Stack.Navigator>
     </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Signup" component={Signup} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default App;
