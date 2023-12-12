import React, { useEffect, useState } from 'react';
import Playlist from './components/Playlist';
import Book from './components/Book';
import Film from './components/Film';
import SpotifyTopTracks from './components/SpotifyTopTracks'; // Import the Spotify component
import axios from 'axios';

const App = () => {
    const [playlistData, setPlaylistData] = useState([]);
    const [bookData, setBookData] = useState([]);
    const [filmData, setFilmData] = useState([]);
    const playlistId = '3dIcY4qvvMkbiTdH3iNV34';

    <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/3dIcY4qvvMkbiTdH3iNV34?utm_source=generator&theme=0`}
        width="100%"
        height="100%"
        style={{ minHeight: '360px' }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
    />

    // Fetch playlist data (replace with your actual API endpoint)
    useEffect(() => {
        axios.get('YOUR_PLAYLIST_API_ENDPOINT')
            .then(response => {
                setPlaylistData(response.data || []); // Use an empty array if response.data is undefined
            })
            .catch(error => {
                console.error('Error fetching playlist data:', error);
            });
    }, []);

    // Fetch book data (replace with your actual API endpoint)
    useEffect(() => {
        axios.get('YOUR_BOOK_API_ENDPOINT')
            .then(response => {
                setBookData(response.data || []); // Use an empty array if response.data is undefined
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }, []);

    // Fetch film data (replace with your actual API endpoint)
    useEffect(() => {
        axios.get('YOUR_FILM_API_ENDPOINT')
            .then(response => {
                setFilmData(response.data || []); // Use an empty array if response.data is undefined
            })
            .catch(error => {
                console.error('Error fetching film data:', error);
            });
    }, []);

    return (
        <div>
            <h1>My Content</h1>
            <Playlist playlistData={playlistData} />
            <Book bookData={bookData} />
            <Film filmData={filmData} />

            {/* Include the SpotifyTopTracks component */}
            <SpotifyTopTracks />
        </div>
    );
};

export default App;