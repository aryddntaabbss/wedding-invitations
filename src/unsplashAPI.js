import axios from 'axios';

const UNSPLASH_ACCESS_KEY = 'YOUR_ACCESS_KEY'; // Ganti dengan Access Key dari Unsplash

const unsplashAPI = axios.create( {
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: `Client-ID ${ UNSPLASH_ACCESS_KEY }`,
    },
} );

export const fetchRandomImage = async ( query ) =>
{
    try
    {
        const response = await unsplashAPI.get( '/photos/random', {
            params: {
                query, // Kata kunci untuk gambar (contoh: "wedding", "couple")
                orientation: 'landscape', // Atur orientasi gambar
            },
        } );
        return response.data.urls.regular; // URL gambar
    } catch ( error )
    {
        console.error( 'Error fetching image from Unsplash:', error );
        return null; // Jika terjadi error
    }
};
