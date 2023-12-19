/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import Routes from './src/Routes/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Routes);
