import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';

class Storage extends React.Component {
  async getAllKeys() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.error(error);
    }
  }

  async getItem(key) {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      } else {
        return null;
      }
    } catch (e) {
      return null;
    }
  }

  async getMulti() {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);

      return result;
    } catch (error) {
      console.error(error);
    }
  }

  async removeItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // console.log(e);
    }
  }

  async setItem(key, value) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // console.log(e);
    }
  }
}

export default new Storage();
