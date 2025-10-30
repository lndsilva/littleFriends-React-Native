import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default props => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.login_header}>
                    <Image
                        source={require('../assets/pet_logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.titulo}>Littles Friends </Text>
                </View>
                <View style={styles.conteudo_usuario}>
                    <TextInput
                        maxLength={50}
                        clearButtonMode="always"
                        label="Username"
                        left={<TextInput.Icon icon="account" />}
                        right={<TextInput.Icon icon="close-circle-outline" />}
                        styles={styles.txtUsuario}
                        mode="outlined"
                        value={usuario}
                        onChangeText={text => setUsuario(text)}
                    />
                    <TextInput
                        label="Password"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={!passwordVisible}
                        maxLength={12}
                        left={<TextInput.Icon icon="lock" />}
                        right={
                            <TextInput.Icon
                                icon={passwordVisible ? "eye" : "eye-off"}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            />
                        }
                        styles={styles.txtSenha}
                        mode="outlined" />
                    <Button
                        labelStyle={styles.txtButton}
                        style={styles.button_Login}
                        mode="contained">
                        Login
                    </Button>
                    <Button
                        labelStyle={styles.txtButton}
                        style={styles.button_cadastrar}
                        mode="contained">
                        Cadastrar
                    </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FEFDF9"
    },
    login_header: {
        alignItems: "center",
        margin: 20,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 10,
    },
    titulo: {
        fontFamily: "PassionOne-Bold",
        fontSize: 30,
        color: "#F79829",
    },
    barraProgresso: {
        width: 300,
        height: 10,
        borderRadius: 5,
        marginTop: 10,
    },
    conteudo_usuario: {
        marginTop: 30,
        alignSelf: "center",
        width: '90%',
    },
    txtUsuario: {
        margin: 20,
    },
    txtSenha: {
        marginTop: 20,
    },
    button_Login: {
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
    },
    button_cadastrar: {
        marginTop: 20,
        borderRadius: 10,
        padding: 10,
        backgroundColor: "#F79829",
        color: "#fff",
    },
    txtButton: {
        fontSize: 18,
    }
})
