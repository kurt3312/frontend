import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homepage from "./screens/Homepage";
import RegisterPage from "./screens/RegisterPage";
import Dashboard from "./screens/Dashboard";
import ReviewPage from "./screens/ReviewPage";
import UserListPage from "./screens/UserListPage"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Homepage">
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Review" component={ReviewPage} />
        <Stack.Screen name="UserList" component={UserListPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
