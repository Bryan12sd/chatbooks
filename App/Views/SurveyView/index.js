import React, {Component} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {
  Dimensions,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import * as Colors from '../../Styles/Colors';

const {width, height} = Dimensions.get('window');

class Survey extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      isFocus: false,
      value: null,
    };
    this.data = [
      {label: 'Padre', value: '1'},
      {label: 'Madre', value: '2'},
      {label: 'Cuidador Primario', value: '3'},
      {label: 'Docente', value: '4'},
    ];
  }

  componentDidMount() {
    this.setState({modalVisible: true});
  }

  closeModal = () => {
    this.setState({modalVisible: false});
  };

  render() {
    const {modalVisible, isFocus, value} = this.state;
    return (
      <BackgroundImageComponent>
        <View style={styles.container}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={this.closeModal}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.titleText}>
                  Completa tu información personal
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: height * 0.05,
                  }}>
                  <Text style={styles.textContent}>Soy un ...</Text>
                  <Dropdown
                    style={[styles.dropdown]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={this.data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Seleccionar...' : '...'}
                    value={value}
                    onFocus={() => this.setState({isFocus: true})}
                    onBlur={() => this.setState({isFocus: false})}
                    onChange={item => {
                      this.setState({value: item.value, isFocus: false});
                    }}
                  />
                </View>
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    backgroundColor: value ? Colors.violet1 : Colors.gray1,
                    borderRadius: 10,
                    justifyContent: 'center',
                    padding: 5,
                    width: width * 0.65,
                    marginTop: height * 0.06,
                  }}
                  disabled={!value}
                  onPress={this.closeModal}>
                  <Text style={styles.textButton}>Siguiente</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </BackgroundImageComponent>
    );
  }
}

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
    marginRight: 10,
  },
  textButton: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.035,
    textAlign: 'center',
  },
  modalContent: {
    height: width * 0.95,
    width: width * 0.9,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  gameButtonRegular: {},
  titleText: {
    color: Colors.blue3,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.035,
    textAlign: 'center',
    marginTop: 24,
  },
  dropdown: {
    height: height * 0.07,
    borderColor: Colors.blue1,
    borderWidth: 2.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    width: width * 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    color: Colors.gray2,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.025,
    textAlign: 'center',
  },
  selectedTextStyle: {
    fontSize: height * 0.025,
    fontFamily: 'Telefonica-Light',
    color: Colors.gray2,
    textAlign: 'center',
  },

  inputSearchStyle: {
    height: 40,
    fontSize: height * 0.025,
    fontFamily: 'Telefonica-Light',
    color: Colors.gray2,
    textAlign: 'center',
  },
});

export default Survey;
