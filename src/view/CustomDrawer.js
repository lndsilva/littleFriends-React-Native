import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";

export default props => {
    return (
        <View style={styles.conteudo}>
            <DrawerContentScrollView {...props}>
                <View style={styles.container}>
                    <Image source={require('../assets/pet_logo.png')} style={styles.logo} />
                    <Text style={styles.titulo_logo}>Little Friends</Text>
                    <Text style={styles.subtitulo_logo}>sac@little-friends.com</Text>
                    <Text style={styles.telefone_logo}>+55-11-3737-3900</Text>
                </View>
                <DrawerItemList {...props} />
            </DrawerContentScrollView>
            <TouchableOpacity style={styles.rodape_botao}>
                <Text style={styles.rodape_texto}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    conteudo: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        padding: 20,
        alignItems: "center",
        marginBottom: 50,
    },
    titulo_logo: {
        fontSize: 35,
        fontWeight: "bold",
        color: "#F79829"
    },
    subtitulo_logo: {
        fontSize: 20,
        color: "#000000ff",
    },
    telefone_logo: {
        fontSize: 20,
        color: "#000000ff",
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 60,
        borderWidth: 2,
        padding: 10,
    },
    rodape_botao: {
        alignSelf: "center",
        backgroundColor: "#F79829",
        padding: 10,
        borderRadius: 20,
        margin: 10,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
    },
    rodape_texto: {
        fontSize: 20,
        color: "#ffffffff",
    }
})