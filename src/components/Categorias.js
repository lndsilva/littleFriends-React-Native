import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-paper";

import Cachorro from "../components/categorias/Cahorro";
import Gato from "../components/categorias/Gato";
import Passaro from "../components/categorias/Passaro";
import Peixe from "../components/categorias/Peixe";

const Tab = createBottomTabNavigator();

export default () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#fff",
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "#e48519ff",
                    width: "100%",
                    height: 80,
                    paddingTop: 10,
                    color: "#000",
                }
            }}
        >
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon source="dog" size={30} color="#ffffffff" />
                    ),
                }}
                name="Cachorro"
                component={Cachorro}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon source="cat" size={30} color="#ffffffff" />
                    ),
                }}
                name="Gato" component={Gato} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon source="bird" size={30} color="#ffffffff" />
                    ),
                }}
                name="Pássaro" component={Passaro} />
            <Tab.Screen
                options={{
                    tabBarIcon: ({ }) => (
                        <Icon source="fish" size={30} color="#ffffffff" />
                    ),
                }}
                name="Peixe" component={Peixe} />
        </Tab.Navigator>
    )
}