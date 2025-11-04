import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Icon, TextInput } from "react-native-paper";

export default ({ navigation }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)


    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.botaoVoltar}
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Icon source="arrow-left" size={50} color="#F79829" />
                    </TouchableOpacity>
                    <Text style={styles.titulo}>Cadastre-se</Text>
                </View>
                <View style={styles.container_cadastrar}>
                    <TextInput
                        style={styles.input}
                        label="Nome completo"
                        maxLength={30}
                        left={<TextInput.Icon
                            icon="account"
                            style={styles.iconsInput} />}
                        right={<TextInput.Icon
                            icon="close-circle-outline"
                            style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TextInput
                        style={styles.input}
                        label="CPF"
                        placeholder="000.000.000-00"
                        mas
                        maxLength={14}
                        left={<TextInput.Icon icon="security" style={styles.iconsInput} />}
                        right={<TextInput.Icon icon="close-circle-outline" style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TextInput
                        style={styles.input}
                        label="E-mail"
                        maxLength={50}
                        left={<TextInput.Icon icon="email" style={styles.iconsInput} />}
                        right={<TextInput.Icon icon="close-circle-outline" style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TextInput
                        style={styles.input}
                        label="Nome do usuário"
                        maxLength={50}
                        left={<TextInput.Icon icon="account-outline" style={styles.iconsInput} />}
                        right={<TextInput.Icon icon="close-circle-outline" style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TextInput
                        label="Criar senha"
                        style={styles.input}
                        value={password}
                        onChangeText={text => setPasswordVisible(text)}
                        secureTextEntry={!passwordVisible}
                        maxLength={12}
                        left={<TextInput.Icon icon="lock" style={styles.iconsInput} />}
                        right={
                        <TextInput.Icon
                            icon={passwordVisible ? 'eye-off' : 'eye'}
                            onPress={() => setPasswordVisible(!passwordVisible)}
                            style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TextInput
                        style={styles.input}
                        label="Confirmar senha"
                        secureTextEntry={!passwordVisible}
                        maxLength={12}
                        left={<TextInput.Icon icon="lock-plus" style={styles.iconsInput} />}
                        right={<TextInput.Icon
                            icon={passwordVisible ? 'eye' : 'eye-off'}
                            onPress={() => setPassword(!passwordVisible)}
                            style={styles.iconsInput} />}
                        mode="outlined"
                    />
                    <TouchableOpacity style={styles.btnCadastrar}>
                        <Text style={styles.txtCadastrar}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9",
    },
    conteudo: {
        margin: 20,
    },
    header: {
        flexDirection: "row",
        marginTop: 20,
    },
    titulo: {
        marginLeft: 60,
        marginTop: 10,
        fontFamily: "PassionOne-Bold",
        fontSize: 40,
        color: "#F79829",
    },
    btnCadastrar: {
        backgroundColor: "#F79829",
        borderColor: "#F79829",
        borderWidth: 3,
        borderRadius: 6,
        padding: 10,
        marginTop: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    txtCadastrar: {
        fontSize: 24,
        color: "#fff",
        fontWeight: "bold"
    },
    container_cadastrar: {
        marginTop: 50,
        marginBottom: 70,
    },
    input: {
        padding: 5,
        fontSize: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    iconsInput: {
        paddingTop: 10,

    },

})
