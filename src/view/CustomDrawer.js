import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Senac Largo Treze</Text>
            <Text style={styles.titulo}>Senac Largo Treze</Text>
            <Text style={styles.titulo}>Senac Largo Treze</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    titulo: {
        fontSize: 30,
    }
})