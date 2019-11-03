/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App_origin from './App_origin';
import App from "./App";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
