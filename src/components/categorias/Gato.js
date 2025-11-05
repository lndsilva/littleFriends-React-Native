import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card, Icon } from "react-native-paper";

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Categoria Pets</Text>
            <Card style={styles.card_container}>
                <Card.Content>
                    <Icon source='heart-outline' size={50} color="#000" />
                    <Text style={styles.card_titulo}>Charlie</Text>
                    <Text style={styles.card_distancia_num}>1,2Km</Text>
                    <Text style={styles.card_distancia}>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato.png')} />

                </Card.Content>
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#B6771D"
    },
    titulo: {
        marginTop: 30,
        marginBottom: 30,
        fontFamily: "PassionOne-Bold",
        fontSize: 50,
        color: "#F79829",
    },
    card_container: {
        width: 230,
        height: 370,
        borderTopEndRadius: 80,
        borderBottomEndRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#E5D3FF",
    },
    card_titulo: {
        marginTop: 10,
        marginBottom: 10,
        fontFamily: "PassionOne-Bold",
        fontSize: 50,
        color: "#000000ff",
    },
    card_imagem: {
        width: "100%",
        height: "70%",
        marginLeft: "50%",
    },
    card_distancia_num: {   
        marginBottom: 10,
        fontFamily: "Belanosima-Regular",
        fontSize: 20,
        color: "#000000ff",
    },
    card_distancia: {
        fontFamily: "Belanosima-Regular",
        fontSize: 20,
        color: "#000000ff",
    },
})
