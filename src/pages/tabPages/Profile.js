import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Logo from '../../components/Logo'
//  import FormSignup from '/../components/FormSignup'



export default class Profile extends Component<{}>{


	render(){
		return(
			<View style={styles.container}>
          <View style={styles.topPane}>
            <View style={styles.topPanecontent1}>
              <Image 
                  source={require('../../images/logo.png')}
                  style = {{width:30, height:36, padding:20}}>

              </Image>

              <Text style={styles.signupButton}>  ICOBA, International</Text>
            </View>
            <View style={styles.topPanecontent2}>
                <Text style={styles.signupText}>Welcomes,  </Text>
                <Text style={styles.signupButton}>AYO DAVID AJAYI</Text>
            </View>
          </View>

          <View style={styles.midPane}>
            <View style={styles.midPanecontent1}>
              <Image 
                  source={require('../../images/image1.jpg')}
                  style = {{width:80, height:100, padding:20}}>

              </Image>

              <Text style={styles.signupButton}>  ICOBA, International</Text>
            </View>
            <View style={styles.midPanecontent2}>
                <Text style={styles.titleText}>Name  </Text>
                <Text style={styles.contentText}>AYO DAVID AJAYI</Text>
                <Text style={styles.titleText}>Set  </Text>
                <Text style={styles.contentText}>2000</Text>
                <Text style={styles.titleText}>Email  </Text>
                <Text style={styles.contentText}>ayodavid@g.com</Text>
                <Text style={styles.titleText}>Phone  </Text>
                <Text style={styles.contentText}>08035256625</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={this.login}>
                  <Text style={styles.buttonText}>Update Profile</Text>
                  </TouchableOpacity>   
               </View>

            </View>
              
          </View>
          	
			</View>
			)	
		
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white',
    alignContent: 'center'
  },

  topPane:{
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#1A237E',
    height: 200,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#f4c842'
  },
  topPanecontent1:{
    flexDirection: 'row',
    marginVertical:30
  },
  topPanecontent2:{
    flexDirection: 'row',
  },
  midPane:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding:40,
    marginVertical:40

  },
  midPanecontent1:{
    justifyContent:'center',
    alignItems: 'center',
    alignContent: 'flex-start'
  },
  midPanecontent2:{
    justifyContent:'center',
    flexDirection: 'column',
  },
  titleText:{
    color:'gray',
    fontSize:16,
    fontWeight:'500'
  },
  contentText:{
    color:'black',
    fontSize:16,    
  },

  signupText:{
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton:{
  	color:'#ffffff',
  	fontSize:20,
  	fontWeight:'500'
  },
   signupTextCont:{
    flexDirection:'row',
    flexGrow:1,
    marginVertical:10,
    justifyContent:'flex-end'
  },
  button: {
    width:150,
    backgroundColor:'#ffeb3b',
     borderRadius: 15,
      marginVertical: 7,
      paddingVertical: 8,
  },
  buttonContainer:{
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    marginTop:10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#000000',
    textAlign:'center'
  }

});
