import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { List, Avatar, Image } from "react-native-paper";

const DATA = [
    { id: '1', title: 'Betta', image: require('../../assets/fish01.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '2', title: 'Neón', image: require('../../assets/fish02.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '3', title: 'Guppy', image: require('../../assets/fish03.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '4', title: 'Pica-Molinéssia', image: require('../../assets/fish04.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '5', title: 'Platy', image: require('../../assets/fish05.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '6', title: 'Pleco', image: require('../../assets/fish06.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '7', title: 'Coridora', image: require('../../assets/fish07.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '8', title: 'Tetra', image: require('../../assets/fish08.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '9', title: 'Paulistinha', image: require('../../assets/fish09.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '10', title: 'Barbo', image: require('../../assets/fish10.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
]

const renderItem = ({ item }) => (
    <View style={styles.container_list_item}>
        <List.Item
            left={props => <Avatar.Image source={item.image} size={80} />}
            title={item.title}
            description={item.description}
            right={props => <List.Icon {...props} icon={item.icon} />}
            onPress={() => console.log(`Pressionado`, item.title)}
            titleStyle={styles.title}
        />

    </View>
)

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Little Friends - Peixe</Text>
            <View style={styles.conteudo}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    contentContainerStyle={styles.listaContainer}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffffff",
    },
    container_list_item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: "#956402ff",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    titulo: {
        alignSelf: "center",
        marginTop: 10,
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#000000ff",
    },
    listaContainer: {
        paddingVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#3E0703",
    }
})
