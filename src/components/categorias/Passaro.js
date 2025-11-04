import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Pássaro</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FF9D00"
    },
    titulo: {
        fontSize: 30,
    }
})
