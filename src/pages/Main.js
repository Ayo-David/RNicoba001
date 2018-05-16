import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TabNavigator, TabBarBottom } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import Logo from '../components/Logo'
import FormSignup from '../components/FormSignup'

import Profile from './tabPages/Profile'
import Members from './tabPages/Members'
import PaymentHome from './tabPages/PaymentHome'
import RollCall from './tabPages/RollCall'
import Events from './tabPages/Events'


const TabsNav = new TabNavigator({
  Profile:{
    screen:Profile,
    navigationOptions: {
            tabBarLabel: 'My',
            tabBarIcon: () => (
                <Image 
                source={require('../images/calendar.png')}
                style = {{width:22, height:22, tintColor:'white'}}>

              </Image>
            )
        }
  },
  Members: {
    screen:Members,
    navigationOptions: {
            tabBarLabel: 'Members',
            tabBarIcon: () => (
                <Image 
                source={require('../images/calendar.png')}
                style = {{width:22, height:22, tintColor:'white'}}>

              </Image>
            )
        }
  },
  PaymentHome: {
    screen:PaymentHome, 
    navigationOptions: {
            tabBarLabel: 'Payment',
            tabBarIcon: () => (
                <Image 
                source={require('../images/calendar.png')}
                style = {{width:22, height:22, tintColor:'white'}}>

              </Image>
            )
        }
  },
  // RollCall: {
  //   screen:RollCall,
  //   navigationOptions: {
  //           tabBarLabel: 'RollCall',
  //           tabBarIcon: () => (
  //               <Ionicons name="md-contact" size={24} />
  //           )
  //       }
  // },
  Events: {
    screen:Events,
    navigationOptions: {
            tabBarLabel: 'Events',
            tabBarIcon: ({tintColor}) => (
              <Image 
                source={require('../images/calendar.png')}
                style = {{width:22, height:22, tintColor:'white'}}>

              </Image>

            )
    }
  }
}, 
  {
    
      tabBarPosition: 'bottom',
      tabBarOptions: {
        activeBackgroundColor: '#1a237e',
        inactiveBackgroundColor: '#000033',
        activeTintColor: 'white',
        inactiveTintColor: 'white',
      //   style: {
      //   BackgroundColor: '#1a237e'
        
      // }
        
      },
      animationEnabled: false,
      swipeEnabled: false,
    

})

export default class Main extends Component<{}>{


	render(){
		return(

			<TabsNav/>
			)	
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A237E',
    alignContent: 'center'
  }
});
