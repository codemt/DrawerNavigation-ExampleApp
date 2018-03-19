import React, { Component } from 'react';
import {Text,View,Button,Image} from 'react-native';
import {Icon} from 'native-base';
export default class ThirdScreen extends Component {

        static navigationOptions = {

                tabBarLabel : 'ThirdScreen',
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
                    ThirdScreen
                    </Text> 
                    <Button 
                        onPress={()=> this.props.navigation.navigate('DrawerOpen')}
                        title="Open DrawNavigator"
                    /> 

                </View> 

        }



}