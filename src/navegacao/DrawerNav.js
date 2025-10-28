import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Splash from "../components/Splash";
import Login from "../components/Login";
import Home from "../components/Home";
import CustomDrawer from "../view/CustomDrawer";


const Drawer = createDrawerNavigator()

export default props => {
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomDrawer />}>
            <Drawer.Screen name="Splash" component={Splash} />
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
    )
}