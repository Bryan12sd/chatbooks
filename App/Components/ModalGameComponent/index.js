import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import * as Colors from '../../Styles/Colors';

const {width, height} = Dimensions.get('window');

const ModalGameComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setModalVisible(true);
    return () => {
      setModalVisible(false);
    };
  }, []); 

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.titleText}>Sabes jugar</Text>
            <Text style={styles.textContent}>
              Presiona "No" para saber como jugar, caso contrario presiona a
              "Si".{' '}
            </Text>
            <TouchableOpacity
              style={styles.gameButtonRegular}
              onPress={closeModal}>
              <Text style={styles.textButton}>Si </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.gameButtonRegular}
              onPress={closeModal}>
              <Text style={styles.textButton}>No </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  textContent: {
    color: Colors.gray2,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.028,
    textAlign: 'center',
  },
  textButton: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  modalContent: {
    height: width * 0.7,
    width: width * 0.77,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  gameButtonRegular: {
    alignItems: 'center',
    backgroundColor: Colors.violet1,
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    padding: 5,
    width: width * 0.4,
  },
  titleText: {
    color: Colors.blue3,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.04,
    textAlign: 'center',
  },
});

export default ModalGameComponent;
