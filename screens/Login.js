import React, { Component } from "react";
import { StyleSheet } from 'react-native'
import {
    Container,
    Header,
    Title,
    Content,
    Button,
    Icon,
    Body,
    Left,
    Right,
    Item,
    Input,
    Form,
    Text
} from "native-base";

class Rounded extends Component {
    state = {
        login: null,
        senha: null,
    }

    Logar = async () => {
        const { navigate } = this.props.navigation;
        axios.post("http://192.168.1.168:5000/user/post", {
            login: this.state.nome,
            senha: this.state.email,
        }).then((response) => {
            console.log(response.data);
            if (response.data.response) {
                // Alert.alert(
                //     'Atenção',
                //     'Usuário adicionado com sucesso!',
                //     [
                //         {
                //             text: 'OK', onPress: () => navigate('Home')
                //         },
                //     ],
                //     {
                //         cancelable: false
                //     },
                // );
            }
            else {
                // Alert.alert("Algo de errado nao deu certo!");
            }
        }).catch(error => {
        })
    }

    render() {
		const { navigate } = this.props.navigation;
        return (
            <Container style={styles.container}>
                <Content padder>
                    <Form>
                        <Item rounded>
                            <Input placeholder="Login" 
                                ref={(el) => { this.login = el; }}
                                onChangeText={(login) => this.setState({ login })}
                                value={this.state.login}/>
                        </Item>
                        <Text></Text>
                        <Item rounded>
                            <Input secureTextEntry placeholder="Senha" 
                                ref={(el) => { this.senha = el; }}
                                onChangeText={(senha) => this.setState({ senha })}
                                value={this.state.senha}/>
                        </Item>
                    </Form>
                </Content>
                <Button block style={{ backgroundColor:'#4169E1', margin: 15, marginTop: 50 }} onPress={this.Logar.bind(this)}>
                    <Text>Entrar</Text>
                </Button>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF"
    }
});

export default Rounded;