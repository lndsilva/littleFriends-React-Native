import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { List, Avatar, Image } from "react-native-paper";

const DATA = [
    { id: '1', title: 'Beija-Flor', image: require('../../assets/beijaFlor.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '2', title: 'Canário', image: require('../../assets/canary.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '3', title: 'Pardal', image: require('../../assets/pardal.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '4', title: 'Pica-Pau', image: require('../../assets/pica_pau.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '5', title: 'Bem-Te-Vi', image: require('../../assets/bem_te_vi.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '6', title: 'Andorinha', image: require('../../assets/andorinha.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '7', title: 'Sabiá Laranjeira', image: require('../../assets/sabia_laranjeira.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '8', title: 'Tico Tico', image: require('../../assets/tico_tico.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '9', title: 'Sanhaço', image: require('../../assets/sanhaco.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '10', title: 'Uirapurú', image: require('../../assets/uirapuru.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
]

const renderItem = ({ item }) => (
    <View style={styles.container_list_item}>
        <List.Item
            left={props => <Avatar.Image source={item.image} size={130} />}
            title={item.title}
            description={item.description}
            right={props => <List.Icon {...props} icon={item.icon} />}
            onPress={() => console.log(`Pressionado`, item.title)}
        />

    </View>
)

export default props => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Little Friends - Dogs</Text>
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
})
