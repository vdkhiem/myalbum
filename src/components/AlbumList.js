import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    constructor(props) {
        super(props);
        this.state = { albums: [] };
    }

    // occurs when component renders to screen or device
    componentWillMount() {
        // this async call will take some time, 
        // it should re-render once async call completed
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then((response) => {
            this.setState({ albums: response.data }); // this setState will trigger render again
        })
        .catch((error) => {
            console.log(error);
        });
    }

    renderAlbums() {
        // return a new array
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        ); 
    }
}

export default AlbumList;