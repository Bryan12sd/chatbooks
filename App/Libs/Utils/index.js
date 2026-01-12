import React from 'react';
import {Linking} from 'react-native';

class Utils extends React.Component {
  _openPages = async (url, http) => {
    console.log(url, http);

    await Linking.openURL(url);
    try {
      const supported = await Linking.openURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Linking.openURL(http);
      }
    } catch (error) {
      console.error('Error al abrir la página:', error);
    }
  };
}

export default new Utils();
