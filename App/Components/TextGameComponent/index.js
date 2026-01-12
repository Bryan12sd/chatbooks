import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');
const TextGame = props => {
  return (
    <View style={styles.containerText}>
      <Text style={styles.textGame}>{props.text}</Text>
      <TouchableOpacity style={styles.gameButton}>
        <Text style={styles.textButton}>{props.buttontext}</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  textGame: {
    color: Colors.gray1,
    fontFamily: 'Telefonica-Regular',
    fontSize: height * 0.025,
  },
  containerText: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameButton: {
    backgroundColor: Colors.violet1,
    marginTop: 10,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 5,
    width: width * 0.4,
  },
  textButton: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Regular',
    fontSize: width * 0.045,
  },
});
export default TextGame;
