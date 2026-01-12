import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');
const ButtonGame = ({imageSource, onPress, label}) => {
  return (
    <TouchableOpacity style={styles.gameButton} onPress={onPress}>
      <Image style={styles.gameImage} source={imageSource} />
      <Text style={styles.gameText}>{label}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  gameImage: {
    borderColor: Colors.white1,
    borderWidth: 1,
    height: width * 0.4,
    shadowColor: Colors.gray1,
    shadowOpacity: 10,
    width: width * 0.4,
  },
  gameButton: {
    backgroundColor: Colors.violet1,
    borderColor: Colors.white1,
    borderWidth: 1,
    height: width * 0.48,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameText: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.025,
    height: height * 0.045,
    alignItems: 'center',
  },
});
export default ButtonGame;
