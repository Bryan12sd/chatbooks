import React, { Component } from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import * as Colors from '../../Styles/Colors';
import { Card } from '@rneui/base';
import HeaderComponent from '../../Components/HeaderComponent';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import Realm from 'realm';
import Photo from '../../Libs/Database/index'; // Asegúrate de que este sea el camino correcto a tu modelo Photo

const { height, width } = Dimensions.get('window');

class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      capturedPhotoURI: null,
    };
  }

  async componentDidMount() {
    try {
      const realm = await Realm.open({
        path: 'myrealm',
        schema: [Photo], // Usar tu modelo de foto
      });

      // Obtén la última foto guardada o según un criterio que desees
      const lastPhoto = realm.objects('Photo').sorted('_id', true)[0];

      if (lastPhoto) {
        this.setState({ capturedPhotoURI: `file://${lastPhoto.path}` });
      }

      realm.close();
    } catch (error) {
      console.error('Error al recuperar la foto desde Realm:', error);
    }
  }

  render() {
    const { capturedPhotoURI } = this.state;
    console.log('capturedPhotoURI:', capturedPhotoURI);

    return (
      <BackgroundImageComponent>
        <View>
          <HeaderComponent goBack />
          <Card
            containerStyle={{
              height: '82%',
              margin: 15,
            }}>
            <View
              style={{
                alignItems: 'center',
                borderColor: '#ccc',
                borderWidth: 2,
                margin: 10,
              }}>
              {capturedPhotoURI && (
                <Image
                  style={{ width: width * 0.76, height: height * 0.52 }}
                  source={{ uri: capturedPhotoURI }}
                />
              )}
            </View>
            <View style={styles.container}>
              <Text style={styles.textHappy}>Nos encanta...</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('ReadStory');
                }}
                style={styles.buttonBack}>
                <Text style={styles.textButton}>VOLVER</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
      </BackgroundImageComponent>
    );
  }
}

const styles = StyleSheet.create({
  textButton: {
    fontFamily: 'Telefonica-Bold',
    color: '#fff',
    fontSize: height * 0.032,
  },
  buttonBack: {
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.violet1,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    shadowColor: Colors.gray1,
    shadowOpacity: 2,
    width: width * 0.6,
  },
  textHappy: {
    fontFamily: 'Telefonica-Bold',
    color: Colors.blue3,
    fontSize: height * 0.04,
  },
  container: {
    alignItems: 'center',
    /*  borderColor: 'red',
    borderWidth: 2, */
  },
});

export default Photos;
