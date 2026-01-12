import React, {Component} from 'react';
import {View} from 'react-native';
import CameraComponent from '../../Components/CameraComponent';
import HeaderComponent from '../../Components/HeaderComponent';
class CameraView extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <HeaderComponent goBack />
        <CameraComponent navigation={navigation} />
      </View>
    );
  }
}

export default CameraView;
/* import React from 'react';
import {
  Camera,
  NoCameraErrorView,
  useCameraDevice,
} from 'react-native-vision-camera';

function CameraView() {
  const device = useCameraDevice('back');

  if (device == null) return <NoCameraErrorView />;
  return <Camera style={{flex: 1}} device={device} isActive={true} />;
}
export default CameraView; */
