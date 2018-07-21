import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

export default class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }
    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }))
            .catch((err) => {
                console.log(err.message);
            });
    }

    renderAlbumlist() {
        return this.state.albums.map(album => <AlbumDetail key={album.title} album={album} />);
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbumlist()}
            </ScrollView>
        );
    }
}
