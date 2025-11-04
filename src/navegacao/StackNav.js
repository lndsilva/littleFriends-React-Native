import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
import Categorias from "../components/Categorias";
import MenuPrincipal from "../components/MenuPrincipal";
import Cadastrar from "../components/Cadastrar";
import Explorer from "../components/Explorer";
import Care from "../components/Care";
import Doacoes from "../components/Doacoes";
import Details from "../components/Details";
import Produtos from "../components/Produtos";


const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName="Categorias">
            <Stack.Screen
                options={{ headerShown: false }}
                name="Splash" component={Splash} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Explorer" component={Explorer} />
            <Stack.Screen name="Care" component={Care} />
            <Stack.Screen name="Doacoes" component={Doacoes} />
            <Stack.Screen name="Categorias" component={Categorias} />
            <Stack.Screen name="Details" component={Details} />
            <Stack.Screen name="Produtos" component={Produtos} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="Cadastrar" component={Cadastrar} />
            <Stack.Screen
                options={{
                    headerShown: false
                }}
                name="MenuPrincipal" component={MenuPrincipal} />
        </Stack.Navigator>
    )
}