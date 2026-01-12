import {Card} from '@rneui/base';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import FooterComponent from '../../Components/FooterComponent';
import HeaderComponent from '../../Components/HeaderComponent';
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import Svg from '../../Libs/Svg';
import * as Colors from '../../Styles/Colors';
const {height} = Dimensions.get('window');
class ReadStory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.route.params.item,
      size: 20,
    };
  }
  _onPressFontSize = type => {
    switch (type) {
      case 'add':
        this.setState({size: this.state.size + 2});
        break;

      case 'reduce':
        if (this.state.size > 10) {
          this.setState({size: this.state.size - 2});
        }

        break;
      default:
    }
  };

  render() {
    const {item, size} = this.state;
    return (
      <BackgroundImageComponent>
        <HeaderComponent goBack />
        <ScrollView style={{marginBottom: height * 0.1}}>
          <Card containerStyle={{marginBottom: height * 0.25}}>
            <Image style={styles.image} source={{uri: item.picture.url}} />

            <Text style={styles.readTextTitle}>{item.title}</Text>

            <Text style={styles.readTextContent}>
              Autor: {item.author_name}
            </Text>

            <Text style={styles.readTextContent}>
              Ilustrador: {item.illustrator_name}
            </Text>

            <Text style={[styles.readText, {fontSize: size}]}>
              {item.content}
            </Text>
          </Card>
        </ScrollView>

        <FooterComponent>
          <View style={styles.readFooter}>
            <View style={styles.icons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('CameraView')}>
                <CustomIcon
                  name="camera"
                  size={height * 0.04}
                  color={Colors.blue3}
                />
              </TouchableOpacity>

              <Text style={styles.readFooterText}>Foto de tu dibujo</Text>
            </View>

            <View style={styles.icons}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Photo')}>
                <Svg
                  name="icon_drawing"
                  width={height * 0.045}
                  height={height * 0.045}
                />
              </TouchableOpacity>
              <Text style={styles.readFooterText}>Mira tu dibujo</Text>
            </View>
            <View style={styles.icons}>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => this._onPressFontSize('reduce')}>
                  <Svg
                    name="icon_size_reduce"
                    width={height * 0.045}
                    height={height * 0.045}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{marginLeft: 20}}
                  onPress={() => this._onPressFontSize('add')}>
                  <Svg
                    name="icon_size_add"
                    width={height * 0.045}
                    height={height * 0.045}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.readFooterText}>Tamaño de letra</Text>
            </View>
          </View>
        </FooterComponent>
      </BackgroundImageComponent>
    );
  }
}
const styles = StyleSheet.create({
  readTextContent: {
    color: Colors.gray3,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.015,
    textAlign: 'center',
  },
  readText: {
    color: Colors.gray3,
    fontFamily: 'Telefonica-Light',
    padding: 10,
    textAlign: 'justify',
    fontSize: 20,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  readFooter: {
    backgroundColor: Colors.white1,
    ...Platform.select({
      ios: {
        bottom: 25,
      },
      android: {
        bottom: 0,
      },
      default: {
        bottom: 0,
      },
    }),

    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  readTextTitle: {
    color: Colors.blue3,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.035,
    marginTop: 10,
    textAlign: 'center',
  },
  readFooterText: {
    color: Colors.blue3,
    fontFamily: 'Telefonica-Bold',
    fontSize: height * 0.015,
    textAlign: 'center',
  },
  image: {
    height: height * 0.2,

    alignItems: 'center',
  },
});
export default ReadStory;
