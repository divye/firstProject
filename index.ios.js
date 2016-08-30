/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 *
 * Author: Divye Gupta
 * Date: 28th August 2016
 */

import React, { Component } from 'react';
import Moment from 'moment';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DatePickerIOS,
} from 'react-native'
var dayCode = 0
//Declare Global Variables
//Create the main component of the class
class firstProject extends Component {
    render() {
    return (
      <View style={styles.container}>
          {this.days()}
      </View>
    );
  }
  
  days() {
    var daysItems = [];
      for(var i = 0; i < 7; i++){
      var day = Moment().add(i,'days').format('dddd');
      daysItems.push(this.jsx(day)
      )
    }
    return daysItems
  }
  jsx(dayOfWeek) {
      dayCode = dayCode + 1
      return <Text style={this.style()}>
      {dayOfWeek}
    </Text>
  }
  style(){
      return {
          color: this.color(),
          fontWeight: this.fontWeight(),
          fontSize: this.fontSize()
      }
  }
  color() {
      var opacity = 2/dayCode;
      return 'rgba(0,0,0, '+ opacity +')'
  }
  fontSize() {
      return 60 - 5 * dayCode
  }
  fontWeight() {
      var weight = (8 - dayCode) * 100
      return weight.toString() 
  }
}


// Declare the styling sheets
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', //moves content height wise provided the ==> flexDirection: 'row'
    alignItems: 'center',       //moves content width wise
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'left',
    margin: 10,
    color: '#0000FF'
  }
});

//Launch the app
AppRegistry.registerComponent('firstProject', () => firstProject);
