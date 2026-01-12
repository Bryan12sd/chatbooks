import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import * as Colors from '../../Styles/Colors';

const {height} = Dimensions.get('window');

const CardListAudio = props => {
  const navigation = useNavigation();
  renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('PlayStory', {item: item});
        }}>
        <Image
          style={styles.Image}
          source={{
            uri: item.picture.url,
          }}
        />
        <Text style={styles.btnTxt}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({item}) => this.renderItem(item)}
        keyExtractor={item => item.id}
        extraData={props.data}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  btnTxt: {
    fontFamily: 'Telefonica-Regular',
    color: Colors.violet1,
    fontSize: height * 0.02,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: Colors.blue1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 25,
    marginBottom: 10,
  },
  Image: {
    width: height * 0.07,
    height: height * 0.07,
  },
});
export default CardListAudio;
