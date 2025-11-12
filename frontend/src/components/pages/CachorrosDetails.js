import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Cachorros - Pages</Text>
            <Image source={require('../../assets/dog_charlie.png')}/>
            <Text style={styles.titulo}>Olá eu sou Charllie.</Text>
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
