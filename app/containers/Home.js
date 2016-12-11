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
  searchPressed() {
    this.props.fetchRecipes('bacon, cucumber, banana');
  }

  recipes() {
    return Object.keys(this.props.searchedRecipes).map(key => this.props.searchedRecipes[key]);
  }

  render() {
    return (
      <View style={{marginTop: 20, flex: 1}}>
        <View>
          <TouchableHighlight onPress={() => this.searchPressed() }>
            <Text>FetchRecipes</Text>
          </TouchableHighlight>
        </View>
        <ScrollView>
          {this.recipes().map((recipe, index) => {
            return (
              <View key={index}>
                <Text>
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

function mapStateToProps(state) {

  return {
    searchedRecipes: state.searchedRecipes
  }
}

export default connect(mapStateToProps)(Home);
