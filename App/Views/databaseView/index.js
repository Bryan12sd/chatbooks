import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import TrackPlayer from 'react-native-track-player';

class ViewDatabase extends Component {
  async componentDidMount() {
    await this.setupPlayer();
  }

  componentWillUnmount() {
    TrackPlayer.destroy(); // Destruye el reproductor cuando el componente se desmonte
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
  };

  pauseAudio = async () => {
    await TrackPlayer.pause();
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Play Audio" onPress={this.playAudio} />
        <Button title="Pause Audio" onPress={this.pauseAudio} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default ViewDatabase;
