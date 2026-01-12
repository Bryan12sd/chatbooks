import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import LoadingComponent from '../../Components/LoadingComponent';
import {WebView} from 'react-native-webview';
import BackgroundImageComponent from '../../Components/BackgroundImageComponent';
import HeaderComponent from '../../Components/HeaderComponent';
class Html extends Component {
  constructor(props) {
    super(props);
    this.state = {url: this.props.route.params.url, loading: true};
  }

  render() {
    return (
      <BackgroundImageComponent>
        <HeaderComponent goBack />
        <LoadingComponent visible={this.state.loading} />
        <WebView
          source={{uri: this.state.url}}
          onLoadStart={() => this.setState({loading: true})}
          onLoad={() => this.setState({loading: false})}
        />
      </BackgroundImageComponent>
    );
  }
}

const styles = StyleSheet.create({});

export default Html;
