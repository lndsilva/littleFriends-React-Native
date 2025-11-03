import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, TextInput } from "react-native-paper";

export default props => {
    return (
        <View>
            <TouchableOpacity>
                <Text>Voltar</Text>
            </TouchableOpacity>
            <Text>Cadastre-se</Text>
            <View>
                <TextInput label="Nome completo" />
                <TextInput label="E-mail" />
                <TextInput label="Nome do usuário" />
                <TextInput label="Criar senha" />
                <TextInput label="Confirmar senha" />
                <TouchableOpacity>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titulo: {
        marginTop: 10,
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#F79829",
    },
})
