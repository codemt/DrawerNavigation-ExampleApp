import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import NotesonPiano from './components/NotesonPiano';
import OctavesonPiano from './components/OctavesonPiano';
import PianoMinorScales from './components/PianoMinorScales';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class SecondScreen extends Component {



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
                  <Title> Piano</Title>
                </Body>
                <Right />
              </Header>
              <Content padder>
              
                    <NotesonPiano />
                    <OctavesonPiano />


              
              </Content>
             </Container>
                     

                    );
      }
}