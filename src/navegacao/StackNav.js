import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";

const Stack = createStackNavigator()

export default props=>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Splash" component={Splash}/>
            <Stack.Screen name="Login" component={Login}/>
            <Stack.Screen name="Home" component={Home}/>
        </Stack.Navigator>
    )
}