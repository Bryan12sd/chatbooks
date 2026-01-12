import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Svg from '../../Libs/Svg';
import * as Colors from '../../Styles/Colors';

const {width} = Dimensions.get('window');
const ButtonHome = props => {
  return (
    <TouchableOpacity style={styles.menuButton} onPress={props.onPress}>
      <Svg
        name={props.icon}
        width={props.width * 0.3}
        height={props.height * 0.3}
      />
      <Text style={styles.btnTxt}>{props.label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnTxt: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    fontSize: width * 0.05,
    marginBottom: 10,
    textAlign: 'center',
  },
  menuButton: {
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 5,
    marginRight: 5,
    width: width * 0.3,
    height: width * 0.4,
  },
});
export default ButtonHome;
