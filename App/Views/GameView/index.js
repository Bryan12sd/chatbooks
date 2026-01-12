import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import * as Colors from '../../Styles/Colors';

import ButtonGame from '../../Components/ButtonGameComponent';
import {ScrollView} from 'react-native-gesture-handler';
const {width, height} = Dimensions.get('window');
class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BackgroundImageComponent type="audio">
        <ScrollView>
          <View style={styles.buttonbig}>
            <TouchableOpacity
              style={styles.gameButton}
              onPress={() => {
                this.props.navigation.navigate('Interactive');
              }}>
              <Image
                style={styles.gameImageFull}
                source={require('../../Assets/Images/Game/interactive.jpg')}
              />
              <Text style={styles.gameText}>Juego Interactivo </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonGames}>
            <ButtonGame
              onPress={() => {
                this.props.navigation.navigate('Maze');
              }}
              imageSource={require('../../Assets/Images/Game/laberinto.png')}
              label={'Laberinto'}></ButtonGame>

            <ButtonGame
              onPress={() => {
                this.props.navigation.navigate('Puzzle');
              }}
              imageSource={require('../../Assets/Images/Game/rompecabezas.png')}
              label={'Rompecabezas'}></ButtonGame>
          </View>
          <View style={styles.buttonGames}>
            <ButtonGame
              onPress={() => {
                this.props.navigation.navigate('Soup');
              }}
              imageSource={require('../../Assets/Images/Game/sopadeletras.png')}
              label={'Sopa de letras'}></ButtonGame>

            <ButtonGame
              onPress={() => {
                this.props.navigation.navigate('Paired');
              }}
              imageSource={require('../../Assets/Images/Game/emparejados.png')}
              label={'Emparejados'}></ButtonGame>
          </View>
        </ScrollView>
      </BackgroundImageComponent>
    );
  }
}
const styles = StyleSheet.create({
  gameButton: {
    alignItems: 'center',
    backgroundColor: Colors.violet1,
    borderColor: Colors.white1,
    borderWidth: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  gameImageFull: {
    borderColor: Colors.white1,
    borderWidth: 1,
    height: height * 0.25,
    shadowColor: Colors.gray1,
    shadowOpacity: 10,
    width: width * 0.9,
  },
  gameText: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.025,
    height: height * 0.045,
  },

  buttonbig: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonGames: {
    marginTop: height * 0.05,
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
  },
});
export default Game;
