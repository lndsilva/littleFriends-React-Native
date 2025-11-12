import React from "react";
import { View, Text, StyleSheet, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { List, Avatar, Image } from "react-native-paper";

const DATA = [
    { id: '1', title: 'Charlie', image: require('../../assets/dog_charlie.png'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '2', title: 'Brunno', image: require('../../assets/bulldog.png'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '3', title: 'Lambido', image: require('../../assets/lambido.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '4', title: 'Mosquito', image: require('../../assets/chihuahua.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '5', title: 'Nina', image: require('../../assets/beagle.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '6', title: 'Getúlio', image: require('../../assets/bernesse.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '7', title: 'Lobo', image: require('../../assets/husky.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '8', title: 'Leonard', image: require('../../assets/puppy.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '9', title: 'Meg', image: require('../../assets/meg.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },
    { id: '10', title: 'Chico', image: require('../../assets/basset.jpg'), descrition: 'Descrição do primeiro item', icon: 'dots-vertical' },

]

const renderItem = ({ item }) => (
    <View style={styles.container_list_item}>
        <List.Item
            left={props => <Avatar.Image source={item.image} size={130} />}
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
            <Text style={styles.titulo}>Little Friends - Cachorro</Text>
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
        marginBottom: 10,
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
        color: "#8d0303ff",
    }
})
