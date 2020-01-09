import React , { Component} from 'react'
import { View,  StatusBar, StyleSheet } from 'react-native';
import {
	Container,
	Header,
	Title,
	Content,
	Button,
    Item,
    Thumbnail,
	Label,
	Input,
	Body,
	Left,
	Right,
	Icon,
	Form,
	Text
} from "native-base";
import logo  from "../assets/logo.jpg"

class HomeScreen extends React.Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>
                <StatusBar backgroundColor="#4169E1"/>
                <Button block style={{ backgroundColor:'#4169E1', margin: 15, marginTop: 50 }} onPress={() => navigate('Cadastro')}>
                    <Text>Cadastrar</Text>
                </Button>
                <Content padder>
                <View style={{ flex: 1, alignItems: "center" }}>
                    <Text style={styles.mb10}>LudusLab</Text>
                    <Thumbnail source={logo} style={styles.mb10} />
                </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "#FFF"
    },
    mb10: {
      marginBottom: 10
    },
    mb35: {
      marginBottom: 35
    }
  });

export default HomeScreen;