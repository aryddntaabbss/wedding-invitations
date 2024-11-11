// src/components/OurStory.js
import React, { useEffect, useState } from 'react';
import { fetchWeddingImages } from '../unsplashAPI';

const OurStory = () =>
{
    const [ groomImage, setGroomImage ] = useState( '' );
    const [ brideImage, setBrideImage ] = useState( '' );

    useEffect( () =>
    {
        // Fetch images for groom and bride
        const fetchImages = async () =>
        {
            const groomImg = await fetchWeddingImages( 'groom' );
            const brideImg = await fetchWeddingImages( 'bride' );
            setGroomImage( groomImg );
            setBrideImage( brideImg );
        };
        fetchImages();
    }, [] );

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="text-3xl font-semibold text-pink-600">Our Story</h2>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Groom's Story */ }
                <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                    <img
                        src={ groomImage }
                        alt="Groom"
                        className="w-40 h-40 rounded-lg object-cover mr-4"
                    />
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mauris odio tellus sem neque, pretium sem sed montes. Enim, cursus massa nec massa ultrices mauris donec id volutpat.
                    </p>
                </div>

                {/* Bride's Story */ }
                <div className="bg-white p-4 rounded-lg shadow-lg flex items-center">
                    <img
                        src={ brideImage }
                        alt="Bride"
                        className="w-40 h-40 rounded-lg object-cover mr-4"
                    />
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor mauris odio tellus sem neque, pretium sem sed montes. Enim, cursus massa nec massa ultrices mauris donec id volutpat.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
