import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Card, Icon } from "react-native-paper";

export default props => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.titulo}>Categoria Pets</Text>
            <View style={styles.container_linha}>
                <View style={[styles.card_container, styles.card_color.cat]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Charlie</Text>
                    <Text>1,2Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato.png')} resizeMode="center" resizeMethod="auto" />
                </View>
                <View style={[styles.card_container, styles.card_color.dog]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Brunno</Text>
                    <Text>1,8Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato_brunno.png')} resizeMode="center" resizeMethod="auto" />
                </View>
            </View>
            <View style={styles.container_linha}>
                <View style={[styles.card_container, styles.card_color.bird]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Ozzi</Text>
                    <Text>1.5Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato-ozzi.png')} resizeMode="center" resizeMethod="auto" />
                </View>
                <View style={[styles.card_container, styles.card_color.rabbit]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Brook</Text>
                    <Text>2.0Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato-brook.png')} resizeMode="center" resizeMethod="auto" />
                </View>
            </View>
            <View style={styles.container_linha}>
                <View style={[styles.card_container, styles.card_color.dog]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Charlie</Text>
                    <Text>1.5Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato-charllie.png')} resizeMode="center" resizeMethod="auto" />
                </View>
                <View style={[styles.card_container, styles.card_color.bird]}>
                    <Icon style={styles.card_icon} source="heart-outline" size={30} color="#000" />
                    <Text style={styles.card_titulo}>Ollie</Text>
                    <Text>2.0Km</Text>
                    <Text>Away</Text>
                    <Image style={styles.card_imagem} source={require('../../assets/gato-ollie.png')} resizeMode="center" resizeMethod="auto" />
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        marginTop: 10,
        alignSelf: "center",
        fontFamily: "PassionOne-Bold",
        fontSize: 50,
        color: "#000",
    },
    container_linha: {
        marginTop: 25,
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    card_container: {
        marginTop: 10,
        marginLeft: 5,
        width: 180,
        height: 200,
        paddingTop: 10,
        paddingLeft: 10,
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: "#E5D3FF",
    },
    card_titulo: {
        marginTop: 10,
        marginBottom: 10,
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#000000ff",
    },
    card_imagem: {
        marginLeft: 40,
        width: 200,
        height: 230,
        position: "absolute"
    },
    card_distancia_num: {
        marginBottom: 10,
        fontFamily: "Belanosima-Regular",
        fontSize: 20,
        color: "#000000ff",
    },
    card_distancia: {
        fontFamily: "Belanosima-Regular",
        fontSize: 30,
        color: "#000000ff",
    },
    card_icon: {
        padding: 10,
    },
    card_color: {
        cat: {
            backgroundColor: "#E4D3FF",
        },
        dog: {
            backgroundColor: "#FFDDE5",
        },
        bird: {
            backgroundColor: "#D7F5C4",
        },
        rabbit: {
            backgroundColor: "#D5FBFF",
        }
    }
})
