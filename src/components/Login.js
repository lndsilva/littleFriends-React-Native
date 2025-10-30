import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { TextInput } from "react-native-paper";


export default props => {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.login_header}>
                    <Image
                        source={require('../assets/pet_logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>Littles Friends </Text>
                </View>
                <View style={styles.conteudo_usuario}>
                    <TextInput
                        maxLength={50}
                        clearButtonMode="always"
                        label="Username"
                        left={<TextInput.Icon icon="account" />}
                        styles={styles.txtUsuario}
                        mode="outlined"
                    />
                    <TextInput
                        maxLength={50}
                        clearButtonMode="always"
                        label="Username"
                        left={<TextInput.Icon icon="lock" />}
                        styles={styles.txtUsuario}
                        mode="outlined"
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9"
    },
    login_header: {
        alignItems: "center",
        margin: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    titulo: {
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#F79829",
    },
    barraProgresso: {
        width: 300,
        height: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    conteudo_usuario: {
        alignSelf: "center",
        width: '90%',

    }
})
