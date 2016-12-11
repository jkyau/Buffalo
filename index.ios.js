import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, comineReduxers, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import reducer from './app/reducers';

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
    ),
  );
  return createStore(reducer, initialState, enhancer);
}

const store = configureStore({});

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Buffalo extends Component {
  render() {
    return (
      <View>
      </View>
    );
  }
}

const App = () => (
  <Provider store={store}>
    <Buffalo/>
  </Provider>
);

AppRegistry.registerComponent('Buffalo', () => App);
