import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default props => {

    const navigation = useNavigation()

    return (
        <View style={styles.conteudo}>
            <Text style={styles.titulo_one}>Find Your Best</Text>
            <Text style={styles.subtitulo}>Companion</Text>
            <Text style={styles.titulo_two}>With Us</Text>
            <View style={styles.container}>
                <Image source={require('../assets/img_home.png')} style={styles.img_home} />
                <TouchableOpacity
                    style={styles.rodape_botao}
                    onPress={() => navigation.navigate('Categorias')}>
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
        fontFamily: "PassionOne-Bold",
        marginTop: 10,
        marginLeft: 20,
        fontSize: 50,
        color: "#000",
        textAlign: "left",
    },
    titulo_two: {
        fontFamily: "PassionOne-Bold",
        marginLeft: 20,
        fontSize: 50,
        color: "#000",
        textAlign: "left",
    },
    subtitulo: {
        fontFamily: "PassionOne-Bold",
        marginLeft: 20,
        fontSize: 50,
        color: "#F79829",
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
