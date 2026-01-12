import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import GameHeaderComponent from '../../Components/GameHeaderComponent';
import TextGame from '../../Components/TextGameComponent';
import ModalGameComponent from '../../Components/ModalGameComponent';

const {width, height} = Dimensions.get('window');
class Paired extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <GameHeaderComponent goBack label="EMPAREJADOS" />
        <ModalGameComponent />
        <TextGame
          text={'Presta mucha atencion y acierta los pares correspondientes.'}
          buttontext={'Iniciar de nuevo'}></TextGame>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
export default Paired;
