import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CachorrosDetails from "../CachorrosDetails";

const Stack = createStackNavigator()

export default props => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CachorrosDetails" component={CachorrosDetails} />
        </Stack.Navigator>
    )
}