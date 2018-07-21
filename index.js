import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => (<Header headerText={'Albums!'} />);

// used to render on device
AppRegistry.registerComponent('albums', () => App);
