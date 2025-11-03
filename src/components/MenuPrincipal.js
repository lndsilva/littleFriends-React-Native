import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Card, Icon, IconButton, MD3Colors } from "react-native-paper";

export default ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <View style={styles.headerTitle}>
                    <TouchableOpacity
                        style={styles.botaoVoltar}
                        onPress={() => navigation.navigate('Login')}>
                        <Icon source="arrow-left" size={50} color="#F79829" />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Menu Principal</Text>
                </View>
            </View>
            <View style={styles.cardHorizontal}>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/pet-shop.png')} />
                        <Text style={styles.cardTitulo}>Categoria</Text>

                    </Card.Content>
                </Card>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/report.png')} />
                        <Text style={styles.cardTitulo}>Detalhes</Text>

                    </Card.Content>
                </Card>
            </View>
            <View style={styles.cardHorizontal}>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/finding.png')} />
                        <Text style={styles.cardTitulo}>Explorar</Text>

                    </Card.Content>
                </Card>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/donation.png')} />
                        <Text style={styles.cardTitulo}>Doações</Text>

                    </Card.Content>
                </Card>
            </View>
            <View style={styles.cardHorizontal}>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/pet-food.png')} />
                        <Text style={styles.cardTitulo}>Produtos</Text>

                    </Card.Content>
                </Card>
                <Card style={styles.cardContainer}>
                    <Card.Content style={styles.cardContainer}>
                        <Card.Cover
                            style={styles.cardImage}
                            source={require('../assets/menu_principal/pet-caren.png')} />
                        <Text style={styles.cardTitulo}>Care</Text>

                    </Card.Content>
                </Card>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9"
    },
    headerTitle: {
        width: "95%",
        flexDirection: "row",
        alignContent: "center",
    },
    conteudo: {
        justifyContent: "center",
        alignItems: "center",
    },
    titulo: {
        marginTop: 10,
        marginLeft: 60,
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#F79829",
    },
    cardContainer: {
        margin: 10,
        alignItems: "center",
        width: 200,
        height: 250,
    },
    cardImage: {
        width: 180,
        height: 180,
    },
    cardTitulo: {
        fontSize: 30,
        margin: 10,
        fontFamily: "PassionOne-Bold",

    },
    cardHorizontal: {
        flexDirection: "row",
    },
    button: {
        color: "#ff0000ff",
    }
})
