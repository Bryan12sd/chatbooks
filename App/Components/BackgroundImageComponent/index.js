import React from 'react';
import {ImageBackground, StyleSheet} from 'react-native';
const BackgroundImageComponent = props => {
  const background = () => {
    switch (props.type) {
      case 'audio':
        return require('../../Assets/Images/backgroundImage-1.jpg');

      default:
        return require('../../Assets/Images/backgroundImage.jpg');
    }
  };
  return (
    <ImageBackground
      resizeMode="cover"
      source={background()}
      style={styles.backgroundImage}>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'flex-start',
  },
});

export default BackgroundImageComponent;
