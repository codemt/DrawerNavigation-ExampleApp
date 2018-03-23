import React, {Component} from 'react';
import { AppRegistry, View } from 'react-native';
import { StatusBar , Image , TouchableOpacity,StyleSheet } from "react-native";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content,Text, Card, CardItem } from "native-base";
import ImageViewer from '../../required/ImageViewer';
let imgsArr = [
    'http://101musicalsacademy.in/wp-content/uploads/2016/06/acousticguitar-diagram-image.jpg'
    
];
class GuitarArchitecture extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            shown: false,
            curIndex: 0,
          
        }
    }
    
    openViewer(index){
      console.log('opened');
        this.setState({
            shown:true,
            curIndex:index
        })
    }
    
    closeViewer(){
      console.log('closed');
        this.setState({
            shown:false,
            curIndex:0
            
        })
    }
  render() {
            return (

                <Card>
                <CardItem header>
                      <Text> Guitar Architecture </Text>
                    </CardItem>
                  <CardItem>
                    <Body>
                    
                      {
                          imgsArr.map((url,index)=>{
                              return <TouchableOpacity key={index}
                                                       activeOpacity={1}
                                                       onPress={this.openViewer.bind(this,index)}>
                                      <Image
                                          source={{uri: url}}
                                          style={styles.img}/>
                                  </TouchableOpacity>
                          })
                      }
                      <ImageViewer shown={this.state.shown}
                                   imageUrls={imgsArr}
                                   onClose={this.closeViewer.bind(this)}
                                   index={this.state.curIndex}>
                      </ImageViewer>
                  
      
          
                    </Body>
                  </CardItem>
                </Card>


                    );
      }
}
let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
        flexWrap: 'wrap',
        marginTop: 20
    },

    img:{
        height:200,
        width: 300,
        marginLeft:10
    }
});

module.exports = GuitarArchitecture;