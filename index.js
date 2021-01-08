/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry, LogBox} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {userReducer} from './src/redux/reducer'

LogBox.ignoreAllLogs(true);

const store = createStore(userReducer);

const Route = () => {
  return  (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

AppRegistry.registerComponent(appName, () => Route);
