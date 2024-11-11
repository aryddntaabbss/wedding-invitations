// src/unsplashAPI.js
import axios from 'axios';

const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;

const unsplashAPI = axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${ UNSPLASH_ACCESS_KEY }`,
    },
} );

export const fetchWeddingImages = async () =>
{
    try
    {
        const response = await unsplashAPI.get( '/search/photos', {
            params: {
                query: 'wedding',
                orientation: 'landscape',
                per_page: 6, // Mengambil 6 gambar bertema wedding
            },
        } );
        // Mengembalikan array URL gambar
        return response.data.results.map( ( photo ) => photo.urls.regular );
    } catch ( error )
    {
        console.error( 'Error fetching wedding images from Unsplash:', error );
        return [];
    }
};
