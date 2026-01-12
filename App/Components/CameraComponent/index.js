import React, { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import RNFS from 'react-native-fs';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import {
  Camera,
  NoCameraErrorView,
  useCameraDevice,
} from 'react-native-vision-camera';
import Realm from 'realm';
import FooterComponent from '../../Components/FooterComponent';
import Photo from '../../Libs/Database/index'; // Asumiendo que tienes el modelo Photo definido en models/Photo.js
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import * as Colors from '../../Styles/Colors';
const { height } = Dimensions.get('window');

function CameraComponent({ navigation }) {
  const device = useCameraDevice('back');
  const [isCameraActive] = useState(true);
  const cameraRef = useRef(null);
  const [realmInstance, setRealmInstance] = useState(null); // Guardar la instancia de Realm

  useEffect(() => {
    requestCameraPermission();
  }, []);

  useEffect(() => {
    const openRealm = async () => {
      try {
        const realm = await Realm.open({
          path: 'myrealm',
          schema: [Photo], // Tu modelo de foto
        });
        setRealmInstance(realm); // Guardar la instancia en el estado
        console.log('Realm abierto con éxito');
      } catch (error) {
        console.error('Error al abrir Realm:', error);
      }
    };

    openRealm();

    // Cierra Realm cuando el componente se desmonte
    return () => {
      if (realmInstance !== null && !realmInstance.isClosed) {
        realmInstance.close();
      }
    };
  }, []);

  const requestCameraPermission = async () => {
    try {
      const result = await request(PERMISSIONS.ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        console.log('Permiso de cámara concedido');
      } else {
        console.log('Permiso de cámara denegado');
        showPermissionDeniedAlert();
      }
    } catch (error) {
      console.error('Error al solicitar permisos:', error);
    }
  };

  const handleCapturePhoto = async () => {
    if (cameraRef.current && isCameraActive && realmInstance) {
      try {
        const photo = await cameraRef.current.takePhoto();
        console.log('Foto Tomada:', photo);

        const timestamp = new Date().getTime();
        const path = `${RNFS.DocumentDirectoryPath}/capturedPhoto_${timestamp}.jpg`;
        await RNFS.moveFile(photo.path, path);

        // Guardar la foto en la base de datos Realm
        realmInstance.write(() => {
          realmInstance.create('Photo', {
            _id: timestamp, // ID único
            name: `Photo_${timestamp}`, // Nombre personalizado
            path: path,
          });
        });

        console.log('Foto guardada en Realm con éxito');
        navigation.navigate('Photo');
      } catch (error) {
        console.error('Error al capturar la foto:', error);
      }
    }
  };

  if (device == null) return <NoCameraErrorView />;

  return (
    <View style={{ flex: 1, backgroundColor: Colors.blue1 }}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        device={device}
        isActive={isCameraActive}
        photo={true}
      />
      <FooterComponent color={Colors.blue2}>
        <View style={styles.readFooter}>
          <TouchableOpacity onPress={handleCapturePhoto}>
            <CustomIcon
              name="camera"
              size={height * 0.06}
              color={Colors.white1}
            />
          </TouchableOpacity>
        </View>
      </FooterComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  readFooter: {
    backgroundColor: Colors.blue2,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    flexDirection: 'row',
    padding: 10,
  },
  camera: {
    width: '80%',
    height: '90%',
    marginStart: 39,
  },
});

export default CameraComponent;
