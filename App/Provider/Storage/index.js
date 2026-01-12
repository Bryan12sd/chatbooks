import AsyncStorage from '@react-native-async-storage/async-storage';

const useStorage = () => {
  const getAllKeys = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.error(error);
    }
  };

  const getItem = async key => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value !== null ? JSON.parse(value) : null;
    } catch (e) {
      return null;
    }
  };

  const getMulti = async () => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const result = await AsyncStorage.multiGet(keys);
      return result;
    } catch (error) {
      console.error(error);
    }
  };

  const removeItem = async key => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // console.log(e);
    }
  };

  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // console.log(e);
    }
  };

  return { getAllKeys, getItem, getMulti, removeItem, setItem };
};

export default useStorage;
