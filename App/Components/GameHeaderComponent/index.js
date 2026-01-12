import {useNavigation} from '@react-navigation/native';
import {Header} from '@rneui/base';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');

const GameHeaderComponent = props => {
  const navigation = useNavigation();
  return (
    <Header
      containerStyle={{backgroundColor: Colors.blue1}}
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: Colors.blue1,
      }}
      leftComponent={() => {
        if (props.goBack) {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <CustomIcon
                name="previous"
                size={width * 0.07}
                color={Colors.white1}
              />
            </TouchableOpacity>
          );
        }
      }}
      centerComponent={
        <View>
          <Text style={styles.gameTextTitle}>CHATBOOKS</Text>
          <Text style={styles.gameTextTitle}>{props.label}</Text>
        </View>
      }
      rightComponent={
        <View>
          <Image
            style={styles.tinyLogo}
            source={require('../../Assets/Images/header.png')}
          />
        </View>
      }
      leftContainerStyle={{
        justifyContent: 'center',
      }}
      placement="center"
    />
  );
};

const styles = StyleSheet.create({
  tinyLogo: {
    width: height * 0.07,
    height: height * 0.07,
  },
  gameTextTitle: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    textAlign: 'center',
    marginRight: '25',

    fontSize: 20,
  },
});
export default GameHeaderComponent;
