import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import GameHeaderComponent from '../../Components/GameHeaderComponent';
import * as Colors from '../../Styles/Colors';

const {width, height} = Dimensions.get('window');
class Soup extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <GameHeaderComponent goBack label="SOPA DE LETRAS" />
        <View style={{alignContent: 'center', alignItems: 'center'}}>
          <Text style={styles.textGame}>
            Encuentra las siguientes palabras/
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textGame: {
    color: Colors.gray1,
    fontFamily: 'Telefonica-Regular',
    fontSize: height * 0.025,
  },
});
export default Soup;
