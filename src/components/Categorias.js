import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default props => {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <Text>Categoria</Text>
            <TextInput
                label="Search here..."
                left={<TextInput.Icon icon="magnify" />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    }
})