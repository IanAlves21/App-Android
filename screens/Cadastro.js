import React, { Component } from "react";
import { StyleSheet , View } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import * as Font from 'expo-font';

import {
	Container,
	Header,
	Title,
	Content,
	Button,
	Item,
	Label,
	Input,
	Body,
	Left,
	Right,
	Icon,
	Form,
	Text
} from "native-base";

class Cadastro extends React.Component {
	state = {
        nome: "",
        cpf: "",
        matricula: "",
        email: "",
        senha: "",
	}
	render(){
		return (
			<Container style={styles.container}>
				<Content>
					<Form>
                        <Item floatingLabel>
                            <Label>Nome</Label>
                            <Input ref= {(el) => { this.nome = el; }}
                                onChangeText={(nome) => this.setState({nome})}
                                value={this.state.nome}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>CPF</Label>
                            <Input ref= {(el) => { this.cpf = el; }}
                                onChangeText={(cpf) => this.setState({cpf})}
                                value={this.state.cpf}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Matrícula</Label>
                            <Input ref= {(el) => { this.matricula = el; }}
                                onChangeText={(matricula) => this.setState({matricula})}
                                value={this.state.matricula}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>E-Mail</Label>
                            <Input ref= {(el) => { this.email = el; }}
                                onChangeText={(email) => this.setState({email})}
                                value={this.state.email}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Senha</Label>
                            <Input secureTextEntry ref= {(el) => { this.senha = el; }}
                                onChangeText={(senha) => this.setState({senha})}
                                value={this.state.senha}/>
                        </Item>
					</Form>
                    <View style={{flexDirection: 'row'}}>
                        <Button block style={{ backgroundColor:'#4169E1', margin: 15, marginTop: 50, width: 150}}>
                            <Text>Cadastrar</Text>
                        </Button>
                        <Button block style={{ backgroundColor:'#8B0000', margin: 15, marginTop: 50, width: 150}}>
                            <Text>Cancelar</Text>
                        </Button>
                    </View>
					
				</Content>
			</Container>
		);
 	}
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
    backgroundColor: '#fff',
  },
});

export default Cadastro;