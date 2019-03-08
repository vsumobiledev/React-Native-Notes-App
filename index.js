/** @format */

import { AppRegistry } from 'react-native';
import Entrypoint from './app/Entrypoint';
import { name as appName } from './app.json';
import { config } from './app/config/firebase-config';
import firebase from 'firebase';


firebase.initializeApp(config);

AppRegistry.registerComponent(appName, () => Entrypoint);
