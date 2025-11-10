import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { List, Avatar, Image } from "react-native-paper";

const DATA = [
    { id: '1', title: 'Beija Flor', descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '2', title: 'Canário', descrition: 'Descrição do segundo item', icon: 'dots-vertical' },
    { id: '3', title: 'Diamante', descrition: 'Descrição do terceiro item', icon: 'dots-vertical' },
    { id: '4', title: 'Calopsita', descrition: 'Descrição do quarto item', icon: 'dots-vertical' },
    { id: '5', title: 'Tico tico', descrition: 'Descrição do quinto item', icon: 'dots-vertical' },
    { id: '6', title: 'Periquito', descrition: 'Descrição do sexto item', icon: 'dots-vertical' },
    { id: '7', title: 'Cacatua', descrition: 'Descrição do sétimo item', icon: 'dots-vertical' },
    { id: '8', title: 'Agapornis', descrition: 'Descrição do oitavo item', icon: 'dots-vertical' },
    { id: '9', title: 'Pombo', descrition: 'Descrição do nono item', icon: 'dots-vertical' },
    { id: '10', title: 'Trinca Ferro', descrition: 'Descrição do décimo item', icon: 'dots-vertical' },
]

const renderItem = ({ item }) => (
    <View style={styles.container_list_item}>
        <List.Item
            left={props => <Avatar.Image source={require('../../assets/passaro.png')} size={80} />}
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
