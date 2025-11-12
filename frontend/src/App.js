import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import DrawerNav from "./navegacao/DrawerNav";
// import StackNav from '../src/navegacao/StackNav'
import StackNavPages from '../src/components/pages/navegacao_pages/StackNavPages'

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {/* <StackNav /> */}
                {/* <DrawerNav /> */}
                <StackNavPages />
            </NavigationContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})