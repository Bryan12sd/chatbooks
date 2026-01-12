import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import ModalGameComponent from '../../Components/ModalGameComponent';
import TextGame from '../../Components/TextGameComponent';
import GameHeaderComponent from '../../Components/GameHeaderComponent';

const {width, height} = Dimensions.get('window');
class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <GameHeaderComponent goBack label="ROMPECABEZAS" />
        <ModalGameComponent />
        <TextGame
          text={'Presiona una pieza y luego otra para intercambiar posiciones.'}
          buttontext={'Barajar'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Puzzle;
