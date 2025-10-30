import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
import Categorias from "../components/Categorias";
import MenuPrincipal from "../components/MenuPrincipal";

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                options={{ headerShown: false }}
                name="Splash" component={Splash} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen name="MenuPrincipal" component={MenuPrincipal} />
        </Stack.Navigator>
    )
}