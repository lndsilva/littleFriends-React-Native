import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";


export default ({ navigation }) => {
    const [usuario, setUsuario] = useState('')
    const [password, setPassword] = useState('')
    const [passwordVisible, setPasswordVisible] = useState(false)

    const limpar = () => {
        setUsuario("")
    }

    const validacaoUsuario = props => {
        if (usuario.trim() === 'senac' && password.trim() === 'senac') {
            navigation.navigate('MenuPrincipal')
        } else {
            Alert.alert('Usuário ou senha inválidos!!!')
            setUsuario('')
            setPassword('')
        }
    }
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
                        returnKeyLabel="next"
                        maxLength={50}
                        clearButtonMode="always"
                        label="Username"
                        left={<TextInput.Icon icon="account" />}
                        right={<TextInput.Icon icon="close-circle-outline"
                            onPress={limpar}
                        />}
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
                                icon={passwordVisible ? "eye-off" : "eye"}
                                onPress={() => setPasswordVisible(!passwordVisible)}
                            />
                        }
                        styles={styles.txtSenha}
                        mode="outlined" />
                    <Button
                        labelStyle={styles.txtButton}
                        style={styles.button_Login}
                        mode="contained"
                        onPress={validacaoUsuario}
                    >
                        Login
                    </Button>
                    <Button
                        labelStyle={styles.txtButton}
                        style={styles.button_cadastrar}
                        mode="contained"
                        onPress={() => navigation.navigate("Cadastrar")}
                    >
                        Cadastrar

                    </Button>
                    <Text style={styles.acessarCom}>-------------------- Acessar com --------------------</Text>
                    <View style={styles.acesso_logo}>
                        <Image source={require('../assets/facebook.png')} style={styles.acesso} />
                        <Image source={require('../assets/google.png')} style={styles.acesso} />
                    </View>
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
        marginTop: 50,
        marginBottom: 30,
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
    },
    acessarCom: {
        marginTop: 20,
        alignSelf: "center",
        fontSize: 20,
    },
    acesso_logo: {
        flexDirection: "row",
        padding: 10,
        justifyContent: "center",
        marginTop: 20
    },
    acesso: {
        width: 60,
        height: 60,
    },
})
