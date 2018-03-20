import React from "react";
import { StatusBar , Image } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class SecondScreen extends React.Component {
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
            <Title> Guitar</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem header>
                <Text>Notes on the Guitar.</Text>
              </CardItem>
            <CardItem>
              <Body>
                <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/guitar_neck.gif'}}
              />
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
                <Text>The Blues Scale</Text>
              </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/07/blues-scale.jpg'}}
              />
              
    
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
                <Text>The Pentatonic Scale</Text>
              </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/minor-pentatonic-scale-1.jpg'}}
              />
              
    
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
                <Text>Guitar Architecture</Text>
              </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'cover'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/acousticguitar-diagram-image.jpg'}}
              />
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
