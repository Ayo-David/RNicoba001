import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,Button,Keyboard
} from 'react-native';


import {Actions} from 'react-native-router-flux';

//to navigate without props
import { withNavigation } from 'react-navigation';

class Form extends Component<{}> {

  constructor(props){
    super(props)
    this.state={
      userEmail:'',
      userPassword:''
    }
  }
signup() {
    Actions.signup()
}


  login = () =>{
    const {userEmail,userPassword} = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(userEmail==""){
      //alert("Please enter Email address");
      this.setState({email:'Please enter Email address'})
      
    }
    
    else if(reg.test(userEmail) === false)
    {
    //alert("Email is Not Correct");
    this.setState({email:'Email is Not Correct'})
    return false;
      }

    else if(userPassword==""){
    this.setState({email:'Please enter password'})
    }
    else{
    
    fetch('http://igbobi.schoolshell.com/rnlogin.php',{
      method:'post',
      header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
      },
      body:JSON.stringify({
        // we will pass our input data to server
        email: userEmail,
        password: userPassword
      })
      
    })
    .then((response) => response.json())
     .then((responseJson)=>{
       if(responseJson == "ok"){
         // redirect to profile page
         alert("Successfully Login");
         this.props.navigation.navigate("Profile");
       }else{
         alert("Wrong Login Details");
       }
     })
     .catch((error)=>{
     console.error(error);
     });
    }
    
    
    Keyboard.dismiss();
  }

	render(){
		return(
			<View style={styles.container}>
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={userEmail => this.setState({userEmail})}
              />
          <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              ref={(input) => this.password = input}
              onChangeText={userPassword => this.setState({userPassword})}
              />  
           <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('MainPage')}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
  		</View>
			)
	}
}

export default withNavigation(Form);

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },

  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  },
  button: {
    width:300,
    backgroundColor:'#000033',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
  
});