import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
import Svg from '../../Libs/Svg';

const {width} = Dimensions.get('window');
const ButtonGame = props => {
  return (
    <TouchableOpacity style={styles.containerButton} onPress={props.onPress}>
      <Svg
        name={props.icon}
        width={props.width * 0.06}
        height={props.height * 0.06}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  containerButton: {
    marginRight: 10,
    flexDirection: 'row',
  },
});
export default ButtonGame;
