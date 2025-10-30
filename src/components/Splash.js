import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProgressBar } from "react-native-paper";


export default ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('Login')
        }, 3000)

        return () => clearTimeout(timer)
    }, [navigation])
    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/pet_logo.png')}
                style={styles.logo}
            />
            <Text style={styles.titulo}>Littles Friends </Text>
            <ProgressBar
                progress={0.5}
                color="#e48519ff"
                indeterminate
                style={styles.barraProgresso}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEFDF9"
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 10,
    },
    titulo: {
        fontFamily: "PassionOne-Bold",
        fontSize: 50,
        color: "#F79829",
    },
    barraProgresso: {
        width: 300,
        height: 10,
        borderRadius: 5,
        marginTop: 10,
    }
})
