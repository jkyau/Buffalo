import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';

const {
  ScrollView,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} = ReactNative

class Gif extends Component {
  constructor(props) {
      super(props);
      console.log('hiiii');
      console.log(this.props.gif);
      this.getGif(this.props.gif.cover);
  }

  getGif(id) {
    console.log(id);
    this.props.fetchImage(id);
  }

  render() {
    return (
      <View>

          <Image
            style={{width: 50, height: 50}}
            source={{uri: this.props.gif.link}}
            />

      </View>
    )
  }
}

const styles = StyleSheet.create({
});

function mapStateToProps(state, props) {
  const images = state.images;
  let id = props.gif.cover;
  let image = state.images[id];

  console.log(image);

  return {
    image,
  }
}

export default connect(mapStateToProps)(Gif);
