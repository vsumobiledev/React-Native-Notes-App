/** @format */

import { AppRegistry } from 'react-native';
import Entrypoint from './app/Entrypoint';
import { name as appName } from './app.json';
import { config } from './app/config/firebase-config';
import firebase from 'firebase';
import Base64 from 'base-64';

global.atob = Base64.encode;

firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => Entrypoint);
