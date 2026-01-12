import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ButtonGame from '../../Components/ButtonGame';
import GameHeaderComponent from '../../Components/GameHeaderComponent';
import * as Colors from '../../Styles/Colors';
import TextGame from '../../Components/TextGameComponent';

const {width, height} = Dimensions.get('window');

class Maze extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <GameHeaderComponent goBack label="LABERINTO" />
        <TextGame
          text={
            'Mueve las flechas y ayuda a la nave para que pueda llegar a su planeta.'
          }
          buttontext={'Cambiar laberinto'}></TextGame>
        <View
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ButtonGame icon="icon_arrow_left" width={height} height={height} />
          <ButtonGame icon="icon_arrow_right" width={height} height={height} />
          <ButtonGame icon="icon_arrow_up" width={height} height={height} />
          <ButtonGame icon="icon_arrow_down" width={height} height={height} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Maze;
