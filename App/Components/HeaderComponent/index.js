import {useNavigation} from '@react-navigation/native';
import {Header} from '@rneui/base';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import * as Colors from '../../Styles/Colors';
const {width, height} = Dimensions.get('window');

const HeaderComponent = props => {
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
          <Image
            style={styles.tinyLogo}
            source={require('../../Assets/Images/chatbooks.png')}
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
});
export default HeaderComponent;
