import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');
const InteractiveButton = props => {
  return (
    <TouchableOpacity style={styles.interactiveButton} onPress={props.onPress}>
      <Text style={styles.interactiveTextTitle}>{props.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  interactiveButton: {
    alignItems: 'center',
    backgroundColor: Colors.violet1,
    borderRadius: 25,
    justifyContent: 'center',
    padding: 10,
    width: width * 0.4,
    alignContent: 'center',
  },
  interactiveTextTitle: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.022,

    textAlign: 'center',
  },
});
export default InteractiveButton;
