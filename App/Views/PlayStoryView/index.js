import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import { Slider } from '@rneui/themed';
import * as Colors from '../../Styles/Colors';
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import TrackPlayer from 'react-native-track-player';

const { height, width } = Dimensions.get('window');

class PlayStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 10,
      item: this.props.route.params.item,
      isPlaying: false,  // Estado para controlar la reproducción
    };
  }

  async componentDidMount() {
    await this.setupPlayer();
  }

  setupPlayer = async () => {
    await TrackPlayer.setupPlayer();
    await TrackPlayer.add({
      id: 'track1',
      url: require('../../Assets/Sound/kiruba.m4a'),
      title: 'Sample Audio',
      artist: 'Sample Artist',
    });
  };

  playAudio = async () => {
    await TrackPlayer.play();
    this.setState({ isPlaying: true });
  };

  pauseAudio = async () => {
    await TrackPlayer.pause();
    this.setState({ isPlaying: false });
  };

  render() {
    const { item, value, isPlaying } = this.state;
    return (
      <BackgroundImageComponent type="audio">
        <HeaderComponent goBack />
        <Image style={styles.image} source={{ uri: item.picture.url }} />
        <Text style={styles.text}>{item.title}</Text>
        <View style={{ alignItems: 'center' }}>
          <Slider
            value={value}
            onValueChange={(value) => {
              this.setState({ value: value });
            }}
            maximumValue={8}
            minimumValue={0}
            step={1}
            allowTouchTrack
            trackStyle={{
              height: 2,
              backgroundColor: 'transparent',
              width: width * 0.8,
            }}
            thumbTintColor="transparent"
            minimumTrackTintColor={Colors.violet1}
            maximumTrackTintColor={Colors.white1}
            thumbStyle={{
              height: 15,
              width: 15,
              backgroundColor: Colors.violet1,
            }}
            style={{
              width: width * 0.8,
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.icons}
          onPress={isPlaying ? this.pauseAudio : this.playAudio}
        >
          <CustomIcon
            name={isPlaying ? "pause" : "play"}
            size={height * 0.035}
            color={Colors.white1}
          />
        </TouchableOpacity>
        <Text style={styles.text}>{value}</Text>
      </BackgroundImageComponent>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    alignItems: 'center',
    height: 250,
    justifyContent: 'center',
    margin: 20,
    width: width - 40,
    borderRadius: 8,
  },
  icons: {
      alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: Colors.white1,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.03,
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center',
  },
});

export default PlayStory;
