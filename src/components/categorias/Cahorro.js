import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar } from "react-native";
import { List, Provider, Divider } from "react-native-paper";

const DATA = [
    { id: '1', title: 'Primeiro Item', descrition: 'Descrição do primeiro item', icon: 'folder' },
    { id: '2', title: 'Segundo Item', descrition: 'Descrição do segundo item', icon: 'folder' },
    { id: '3', title: 'Terceiro Item', descrition: 'Descrição do terceiro item', icon: 'folder' },
    { id: '4', title: 'Quarto Item', descrition: 'Descrição do quarto item', icon: 'folder' },
    { id: '5', title: 'Quinto Item', descrition: 'Descrição do quinto item', icon: 'folder' },
    { id: '6', title: 'Sexto Item', descrition: 'Descrição do sexto item', icon: 'folder' },
    { id: '7', title: 'Sétimo Item', descrition: 'Descrição do sétimo item', icon: 'folder' },
    { id: '8', title: 'Oitavo Item', descrition: 'Descrição do oitavo item', icon: 'folder' },
    { id: '9', title: 'Nono Item', descrition: 'Descrição do nono item', icon: 'folder' },
    { id: '10', title: 'Décimo Item', descrition: 'Descrição do décimo item', icon: 'folder' },
]

const renderItem = ({ item }) => (
    <View>
        <List.Item
            title={item.title}
            description={item.description}
            left={props => <List.Icon {...props} icon={item.icon} />}
            onPress={() => console.log(`Pressionado`, item.title)}
        />
        <Divider />
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
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9",
    },
    conteudo: {
        marginTop: StatusBar.currentHeight || 0
    },
    titulo: {
        marginTop: 10,
        marginLeft: 60,
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#F79829",
    }
})
