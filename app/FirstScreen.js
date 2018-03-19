import React, { Component } from 'react';
import {Text,View,Button,Image, StyleSheet} from 'react-native';
import {Icon} from 'native-base';
export default class FirstScreen extends Component {

        static navigationOptions = {

                tabBarLabel : 'Screen1',
                drawerIcon : () => {


                        return(

                                            
                                <Icon
                                name='ios-home'
                                size={150}
                                color='#887700'
                                
                                />
                                            
                          


                        );

                }


        }
        render(){

                return <View style={
                    {    


                    }        

                }>

                    <Text style={{ textAlign:'center',fontSize:30,color:'green'}}>
                    Home 
                    </Text> 
                    <Icon name="ios-menu"
                           onPress={()=> this.props.navigation.navigate('DrawerOpen')} 
                           title="Open DrawNavigator">
                    </Icon>
                   

                </View> 

        }



}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 100
    }
  });