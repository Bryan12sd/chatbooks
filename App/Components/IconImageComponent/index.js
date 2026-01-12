import React from 'react';
import {Dimensions, StyleSheet, TouchableOpacity, Image} from 'react-native';

const {width} = Dimensions.get('window');
const ButtonUs = ({imageSource, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={imageSource} style={styles.imageIcons} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  imageIcons: {
    width: width * 0.09,
    height: width * 0.05,
  },
});
export default ButtonUs;
