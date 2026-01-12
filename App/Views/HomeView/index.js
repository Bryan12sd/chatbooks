import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import ButtonHome from '../../Components/ButtonHome';
const {width, height} = Dimensions.get('window');
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BackgroundImageComponent>
        <View style={styles.menu}>
          <ButtonHome
            onPress={() => {
              this.props.navigation.navigate('Stories');
            }}
            label="Querido Planeta"
            icon="icon_menu_1"
            width={width}
            height={width}
          />
          <ButtonHome
            onPress={() => {
              this.props.navigation.navigate('GameView');
            }}
            label="Después del temblor"
            icon="icon_menu_2"
            width={width}
            height={width}
          />
          <ButtonHome
            label="La Tierra Habla"
            icon="icon_menu_3"
            width={width}
            height={width}
          />
        </View>
        <View style={styles.menu}>
          <ButtonHome
            label="Historias de Cuya"
            icon="icon_menu_4"
            width={width}
            height={width}
          />
          <ButtonHome
            label="Un cuento, un ODS"
            icon="icon_menu_5"
            width={width}
            height={width}
          />
          <ButtonHome
            label="Historias en familia"
            icon="icon_menu_7"
            width={width}
            height={width}
          />
        </View>
        <View style={styles.menu_second}>
          <ButtonHome
            onPress={() => {
              this.props.navigation.navigate('SubHome');
            }}
            label="Yo cuento"
            icon="icon_menu_6"
            width={width}
            height={width}
          />
        </View>
      </BackgroundImageComponent>
    );
  }
}
const styles = StyleSheet.create({
  menu: {
    alignContent: 'center',
    flex: 0.25,
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: height * 0.07,
  },
  menu_second: {
    alignContent: 'center',
    flex: 0.25,
    alignItems: 'center',
    marginTop: height * 0.04,
  },
});
export default Home;
