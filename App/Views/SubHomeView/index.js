import React, {Component} from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import ButtonHome from '../../Components/ButtonHome';
import HeaderComponent from '../../Components/HeaderComponent';
const {width, height} = Dimensions.get('window');
class SubHome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BackgroundImageComponent>
        <HeaderComponent goBack />
        <View style={styles.menu_second}>
          <ButtonHome
            onPress={() => {
              this.props.navigation.navigate('Stories');
            }}
            label="8 a 11 años "
            icon="icon_menu_8"
            width={width}
            height={width}
          />
          <ButtonHome
            label="12 a 14 años"
            icon="icon_menu_9"
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
  },
  menu_second: {
    alignContent: 'center',
    flex: 0.25,
    alignItems: 'center',
  },
});
export default SubHome;
