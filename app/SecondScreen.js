import React, { Component } from 'react';
import {Text,View,Button,Image} from 'react-native';
import {Icon} from 'native-base';
export default class SecondScreen extends Component {

        static navigationOptions = {

                tabBarLabel : 'Screen1',
                drawerIcon : () => {


                        return(

                                <Text> FirstScreen </Text> 


                        );

                }


        }
        render(){

                return <View style={
                    {    
                        flex: 1,
                        justifyContent : 'center',
                        alignItems : 'center'

                    }        

                }>

                    <Text style={{fontSize:30,color:'green'}}>
                    Screen 1 
                    </Text> 
                    <Button 
                        onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        title="Open DrawNavigator"
                    /> 

                </View> 

        }



}