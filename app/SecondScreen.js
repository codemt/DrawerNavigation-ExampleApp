import React, { Component } from 'react';
import {Text,View,Button,Image} from 'react-native';
import {Icon} from 'native-base';
export default class SecondScreen extends Component {

        static navigationOptions = {

                tabBarLabel : 'Screen2',
                drawerIcon : () => {


                        return(

                            <Icon
                            name='ios-people'
                            size={150}
                            color='#887700'
                            
                            />


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
                    Screen 2
                    </Text> 
                    <Button 
                        onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        title="Open DrawNavigator"
                    /> 

                </View> 

        }



}