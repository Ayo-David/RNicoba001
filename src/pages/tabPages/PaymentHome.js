import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';

import Payment from './Payment';
import MakePayment from './MakePayment';



type Props = {};
const StackNavigatorConfig = {
   //initialRouteName:'LoginPage',
    headerMode: 'none',
}

const MyNavigation = new StackNavigator({

  Payment:{screen:Payment},
  MakePayment:{screen:MakePayment},
  

}, StackNavigatorConfig)

export default class PaymentHome extends Component<Props> {
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
