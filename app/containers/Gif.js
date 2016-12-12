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
  Dimensions,
} = ReactNative

class Gif extends Component {
  constructor(props) {
      super(props);
      this.getGif(this.props.gif.cover);
  }

  getGif(id) {
    this.props.fetchImage(id);
  }

  render() {
    let url = this.props.gif.link;

    return (
      <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={[styles.canvas, {height: this.props.height}]}
            source={{uri: url}}
            />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  canvas: {
    width: Dimensions.get('window').width,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'stretch'
  }
});

function mapStateToProps(state, props) {
  const images = state.images;

  let gifv = props.gif.gifv;
  let id = props.gif.cover;
  let image = state.images[id];
  let height = Dimensions.get('window').width * props.gif.height / props.gif.width;

  return {
    image,
    height,
    gifv,
  }
}

export default connect(mapStateToProps)(Gif);
