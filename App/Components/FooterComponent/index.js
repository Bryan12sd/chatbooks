import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
const {height} = Dimensions.get('window');
const FooterComponent = props => {
  const color = props.color ? props.color : '#ffff';

  return (
    <View style={styles.container}>
      <View style={[styles.footer, {backgroundColor: color}]}>
        {props.children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.1,
    justifyContent: 'center',
  },
});
export default FooterComponent;
