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
            <Title> 101MusicalsAcademyofMusic</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>We Specialise in Teaching Guitar and Piano in Vikhroli.</Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Body>
              <Image resizeMode='cover' source={ require('./images/classimage1.jpg')} />
              <Text>This is a Private Music Class based in Vikhroli .
Established in 2012 , founded by Musician/Artist – Mithilesh Meshram.
We Teach from Basics to the very Professional Level.
We specialise in teaching all techniques.
Fingerstyle technique is also taught for People who have completed the Basic and Advanced Levels.
Jam Sessions are Organised for the Academy Members to Learn how to time their Music.
Vocal Training is also Provided once Students and Members start playing Rhythm Guitar.
Batch consists of 6-7 people and is of 2 hours each.
Music Notes and Theory are Provided. We Don’t Teach Staff Notations but we Teach Music Tabs which are generally used everywhere.</Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
