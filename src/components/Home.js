import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default props => {
    return (
        <View style={styles.conteudo}>
            <Text style={styles.titulo_one}>Find Your Best</Text>
            <Text style={styles.subtitulo}>Companion</Text>
            <Text style={styles.titulo_two}>With Us</Text>
            <View style={styles.container}>
                <Image source={require('../assets/img_home.png')} style={styles.img_home} />
                <TouchableOpacity style={styles.rodape_botao}>
                    <Text style={styles.rodape_texto}>Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
        backgroundColor: "#FEFDF9",

    },
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9",
        margin: 10,
        justifyContent: "space-around",
        alignItems: "center",
    },
    titulo_one: {
        fontFamily:'roboto_condensed_black',                
        marginTop: 10,
        marginLeft: 20,
        fontSize: 40,
        color: "#000",
        fontWeight: "bold",
        textAlign: "left",
    },
    titulo_two: {
        marginLeft: 20,
        fontSize: 40,
        color: "#000",
        fontWeight: "bold",
        textAlign: "left",
    },
    subtitulo: {
        marginLeft: 20,
        fontSize: 40,
        color: "#F79829",
        fontWeight: "bold",
        textAlign: "left",
    },
    img_home: {
        width: "80%",
        alignSelf: "center"
    },
    rodape_botao: {
        backgroundColor: "#F79829",
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: 300,
        justifyContent: "",
        alignItems: "center",
        marginBottom: 30,
    },
    rodape_texto: {
        fontSize: 20,
        color: "#ffffffff",
    }
})
