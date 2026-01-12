import {Platform, StatusBar} from 'react-native';
import React from 'react';
import SplashScreen from 'react-native-splash-screen';

import * as Colors from './App/Styles/Colors';
import MainStackNavigator from './App/Navigator/MainStackNavigator';
import Storage from './App/Libs/Storage';
import 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.getAllKeys();
  }

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }

  getAllKeys() {
    return Storage.getMulti().then(res => {
      //Test
      // console.log(res);
      for (var i = 0; i < res.length; i++) {
        let item = res[i];
        let items = JSON.parse(item[1]);
        this.setState({[item[0]]: items.status});
      }
      this.setState({status: true});

      //Test
      // console.log(this.state);
    });
  }

  getPage() {
    let page = null;
    page = 'StackInit';
    //Test
    // console.log('Page', page);
    return page;
  }

  render() {
    if (this.state.status) {
      StatusBar.setBarStyle('light-content', true);
      if (Platform.OS === 'android') {
        StatusBar.setBackgroundColor(Colors.blue1, true);
      }
      return <MainStackNavigator page={this.getPage()} />;
    } else {
      return null;
    }
  }
}
