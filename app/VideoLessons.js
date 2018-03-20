import React from "react";
import { StatusBar , Image } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
export default class ThirdScreen extends React.Component {
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
          <Card>
            <CardItem header>
                <Text>Notes on the Piano.</Text>
              </CardItem>
            <CardItem>
              <Body>
                <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/32-key-keyboard-1.jpg'}}
              />
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
                <Text>Octaves on the Piano </Text>
              </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/2.jpg'}}
              />
              
    
              </Body>
            </CardItem>
          </Card>
          <Card>
          <CardItem header>
                <Text>Piano Minor Scales</Text>
              </CardItem>
            <CardItem>
              <Body>
              <Text></Text>
                <Image
                style={{width: 300, height: 100,resizeMode:'contain'}} 
                source={{uri: 'http://101musicalsacademy.in/wp-content/uploads/2016/06/minorscales1.png'}}
              />
              
    
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
