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

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
        ingredientsInput: ''
      }
  }

  searchPressed() {
    this.props.fetchRecipes(this.state.ingredientsInput);
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key]);
  }

  render() {
    return (
      <View style={styles.scene}>
        <View style={styles.searchSection}>
          <TextInput
            style={styles.searchInput}
            returnKeyType="search"
            placeholder='Ingredients (comma delimited)'
            onChangeText={(ingredientsInput) => this.setState({ingredientsInput})}
            value={this.state.ingredientsInput}
            />
          <TouchableHighlight onPress={() => this.searchPressed() } style={styles.searchButton}>
            <Text>FetchRecipes</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollSection}>
          {this.recipes().map((recipe, index) => {
            return (
              <View key={index}>
                <Text style={styles.resultText}>
                  {recipe.title}
                </Text>
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
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
