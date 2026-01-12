import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import * as Colors from '../../Styles/Colors';

const {height, width} = Dimensions.get('window');

const CardListStoriesComponent = props => {
  const navigation = useNavigation();
  renderItem = item => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('ReadStory', {item: item});
        }}>
        <Image
          style={styles.image}
          source={{
            uri: item.picture.url,
          }}
        />
        <Text style={styles.textitle}>{item.title}</Text>
        <Text style={styles.textcontent}>{item.author_name}</Text>
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
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 0,
  },
  textitle: {
    color: Colors.blue1,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.02,
    marginTop: 10,
    textAlign: 'center',
  },
  textcontent: {
    color: Colors.gray2,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.02,
    textAlign: 'center',
  },
  button: {
    backgroundColor: Colors.white1,
    borderRadius: 8,
    margin: 10,
    padding: 10,
    width: width * 0.45,
  },
  image: {height: height * 0.2, width: '100%'},
});
export default CardListStoriesComponent;
