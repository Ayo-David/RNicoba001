import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import Logo from '../components/Logo'
import Form from '../components/Form'

import {StackNavigator} from 'react-navigation';

import Main from './Main';


import {Actions} from 'react-native-router-flux';



export default class Login extends Component<{}>{


signup() {
    Actions.signup()
}



	render(){
		return(

			<View style={styles.container}>
				<Logo/>
				<Form type='Login'/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>New Member? </Text>
					<TouchableOpacity onPress={() => this.props.navigation.navigate('SignupPage')}><Text style={styles.signupButton}>SignUp</Text></TouchableOpacity>
				</View>
			</View>
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
  },

  signupText:{
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton:{
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  signupTextCont:{
    flexDirection:'row',
    flexGrow:1,
    marginVertical:10,
    justifyContent:'flex-end'
  }
});
