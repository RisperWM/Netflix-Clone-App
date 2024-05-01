import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";
import Home from "./Home";
import Search from "./Search";
import ComingSoon from "./ComingSoon";
import Downloads from "./Downloads";
import More from "./More";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "red",
        headerShown: false, 
        tabBarStyle: styles.tabBar, 
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({focused}) => (
            <Entypo name="home" size={24} color={focused? "red" :"white" } />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({focused}) => (
            <FontAwesome name="search" size={24} color={focused? "red" :"white" } />
          ),
          tabBarBadge: 3,
        }}
      />
      <Tab.Screen
        name="New & Hot"
        component={ComingSoon}
        options={{
          tabBarLabel: "New & Hot",
          tabBarIcon: ({focused}) => (
            <Entypo name="folder-video" size={24} color={focused? "red" :"white" } />
          ),
        }}
      />
      <Tab.Screen
        name="Downloads"
        component={Downloads}
        options={{
          tabBarLabel: "Downloads",
          tabBarIcon: ({focused}) => (
            <Entypo name="arrow-with-circle-down" size={24} color= {focused? "red" :"white" }/>
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={{
          tabBarLabel: "More",
          tabBarIcon: ({focused}) => (
            <Foundation name="indent-more" size={24} color={focused? "red" :"white" } />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#101010", 
  },
});
