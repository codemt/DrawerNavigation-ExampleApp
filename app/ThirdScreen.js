import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import BluesScale from './components/guitar/BluesScale';
import GuitarArchitecture from './components/guitar/GuitarArchitecture';
import NotesonGuitar from './components/guitar/NotesonGuitar';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class ThirdScreen extends Component {



  render() {
            return (

              <Container>
              <Header>
                <Left>
                  <Button
                    transparent
                    onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                    <Icon name="menu" />
                  </Button>
                </Left>
                <Body>
                  <Title> Guitar </Title>
                </Body>
                <Right />
              </Header>
              <Content padder>
              
                    <BluesScale />
                    <GuitarArchitecture />
                    <NotesonGuitar />


              
              </Content>
             </Container>
                     

                    );
      }
}