import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Main from './src/pages/Main';
import Signup from './src/pages/Signup';
import NavPage from './src/pages/NavPage';
//import NavigationService from './NavigationService';




import Routes from './src/Routes';

///////
// export default StackNavigator({
//   SplashScreen: { screen: SplashScreen },
//   AuthScreen: { screen: AuthScreen },
//   MainNavigator: { screen: MainNavigator }
// }, {
//   headerMode: 'screen',
//   navigationOptions: {
//     header: { visible: false }
//   }
// })

///////
//const TopLevelNavigator = createStackNavigator({ /* ... */ })

type Props = {};
const StackNavigatorConfig = {
   //initialRouteName:'MainPage',
    headerMode: 'none',
}

const MyNavigation = new StackNavigator({

  Home:{screen:Home},
  LoginPage:{screen:Login},
  MainPage:{screen:Main},
  SignupPage:{screen:Signup},
  AllNavPage:{screen:NavPage},
 

}, StackNavigatorConfig)

export default class App extends Component<Props> {
  render() {
    return (
     // <TopLevelNavigator ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef);}}/>
      <MyNavigation/>
     // <Routes / >
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },

});
