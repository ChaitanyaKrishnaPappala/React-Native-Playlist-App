import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
        <View>
            <Header headerText={'Albums!!'} />
            <AlbumList capture={'hello'} />
        </View>
    );

// used to render on device
AppRegistry.registerComponent('albums', () => App);
