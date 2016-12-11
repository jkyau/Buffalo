import React, { Component } from 'react';
import ReactNative from 'react-native';
import { connect } from 'react-redux';
import Gif from './Gif';

const {
  ScrollView,
  View,
  TextInput,
  Text,
  Image,
  TouchableHighlight,
  StyleSheet,
} = ReactNative

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ingredientsInput: '',
        gifsInput: '',
      }
  }

  searchPressed() {
    this.props.fetchRecipes(this.state.ingredientsInput);
  }

  searchGifs() {
    this.props.fetchGifs(this.state.gifsInput);
  }

  gifs() {
    return Object.keys(this.props.searchedGifs).map(key => this.props.searchedGifs[key]);
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          {/*<TextInput
            style={styles.searchInput}
            returnKeyType="search"
            placeholder='Input'
            onChangeText={(gifsInput) => this.setState({gifsInput})}
            value={this.state.gifsInput}
            />*/}
          <TouchableHighlight onPress={() => this.searchGifs() } style={styles.searchButton}>
            <Text>Get Gifs</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollSection}>
          {this.gifs().map((gif, index) => {
            return (
              <View key={gif.id}>
                <Gif {...this.props} gif={gif}/>
                <Text style={styles.resultText}>{gif.title}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 20,
  },
  searchInput: {
    flex: 0.7,
  },
  searchButton: {
    flex: 0.3,
  },
  searchSection: {
    height: 30,
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    padding: 5,
    flexDirection: 'row',
  },
  scrollSection: {
    flex: 0.8,
  },
  resultText: {
    backgroundColor: '#000',
    color: '#fff',
    height: 20,
  }
});

function mapStateToProps(state) {
  return {
    searchedGifs: state.searchedGifs,
  }
}

export default connect(mapStateToProps)(Home);
