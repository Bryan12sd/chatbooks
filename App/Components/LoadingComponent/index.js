// SpinnerComponent.js
import React from 'react';
import {StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';

const LoadingComponent = ({visible, text}) => {
  return (
    <Spinner
      visible={visible}
      color="#019ee6"
      overlayColor="rgba(0, 0, 0, 0.6)"
    />
  );
};

const styles = StyleSheet.create({});

export default LoadingComponent;
