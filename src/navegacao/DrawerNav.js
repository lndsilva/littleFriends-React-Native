import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../components/Home";
import Details from "../components/Details";
import Explorer from "../components/Explorer";
import Cadastrar from "../components/Cadastrar";
import Login from "../components/Login";

import CustomDrawer from "../view/CustomDrawer";

const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: true,
                headerStyle: {
                    backgroundColor: "tranparent",
                    elevation: 0,
                    shadowOpacity: 0,
                },
                headerTitle: "",
            }}
        >
            <Drawer.Screen name="Home" component={Home} />            
            <Drawer.Screen name="Cadastrar" component={Cadastrar} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    )
}