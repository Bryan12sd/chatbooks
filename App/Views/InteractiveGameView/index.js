import {Card} from '@rneui/base';
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import CustomIcon from '../../Libs/IcoMoon/CustomIcon';
import InteractiveButton from '../../Components/InteractiveGameButtonComponent';
import * as Strings from '../../Provider/Strings/strings.js';

import * as Colors from '../../Styles/Colors';

const {width, height} = Dimensions.get('window');
class Interactive extends Component {
  constructor(props) {
    super(props);
    this.state = {interactive: Strings.interactive_1[0]};
  }
  onPressCheck = key => {
    this.setState({interactive: Strings.interactive_1[key - 1]});
  };
  render() {
    const {navigation} = this.props;
    return (
      <BackgroundImageComponent>
        <View
          style={{
            marginTop: height * 0.1,
          }}>
          <Card containerStyle={{height: height * 0.72}}>
            <TouchableOpacity
              style={{marginTop: 25}}
              onPress={() => {
                navigation.goBack();
              }}>
              <CustomIcon
                name="previous"
                size={width * 0.07}
                color={Colors.violet1}
              />
            </TouchableOpacity>
            <Text style={styles.textIntercative}>
              {this.state.interactive.title}
            </Text>
            <Image
              style={styles.imageInteractive}
              source={this.state.interactive.image}
            />
            {this.state.interactive.key !== 13 && (
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <InteractiveButton
                  onPress={() =>
                    this.onPressCheck(this.state.interactive.buttonFirstKey)
                  }
                  label={this.state.interactive.buttonFirst}
                />
                <InteractiveButton
                  onPress={() =>
                    this.onPressCheck(this.state.interactive.buttonSecondKey)
                  }
                  label={this.state.interactive.buttonSecond}
                />
              </View>
            )}

            {this.state.interactive.key === 13 && (
              <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={styles.endText}>FIN</Text>
              </View>
            )}
          </Card>
        </View>
      </BackgroundImageComponent>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
  },
  textIntercative: {
    color: Colors.gray2,
    fontFamily: 'Telefonica-Light',
    fontSize: height * 0.03,
    marginTop: 10,
    textAlign: 'center',
  },
  imageInteractive: {
    width: '100%',
    height: 250,
    marginBottom: 20,
    marginTop: 20,
  },
  endText: {
    fontFamily: 'Telefonica-Bold',
    color: Colors.violet1,
    fontSize: height * 0.05,
  },
});
export default Interactive;
