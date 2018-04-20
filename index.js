import React , { Component} from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import SplashScreen from './app/SplashScreen';
class Main extends Component{
    constructor(props){


        super(props);
        this.state = { currentScreen : 'SplashScreen'};
        console.log('Start Doing Some Tasks')
        setTimeout(()=>{
            window.alert(`Welcome , Please use the Drawer Menu to Navigate to other Pages.`)
            console.log('Done some tasks for 3 seconds')
            this.setState({currentScreen:'App'})
        },5000)

    }
    render(){

        const {currentScreen} = this.state;
        let mainScreen = currentScreen === 'SplashScreen' ? <SplashScreen /> : <App />;
        return mainScreen;


    }




}
AppRegistry.registerComponent('MusicClassApp', () => Main);
