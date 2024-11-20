import React, { useEffect, useState } from 'react';
import { fetchWeddingImages } from '../unsplashAPI';

const GallerySection = () =>
{
    const [ galleryImages, setGalleryImages ] = useState( [] );

    useEffect( () =>
    {
        const loadImages = async () =>
        {
            const images = await fetchWeddingImages(); // Memanggil gambar bertema wedding
            setGalleryImages( images );
        };
        loadImages();
    }, [] );

    return (
        <section className="py-12 px-5 bg-pink-50 text-center">
            <h2 className="text-3xl font-semibold text-pink-600">Gallery</h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                { galleryImages.map( ( image, index ) => (
                    <div key={ index } className="overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={ image }
                            alt={ `Wedding gallery image ${ index + 1 }` }
                            className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                        />
                    </div>
                ) ) }
            </div>

            <p className="text-gray-600 mt-8 italic max-w-2xl mx-auto">
                "And among His verses is that He has created for you wives of your own kind, so that you may feel comfortable in them, and He has made between you mawaddah and mercy. Verily in that are signs for the people who think"
            </p>
            <p className="text-gray-600 mt-2 font-semibold">- AR-RUM 21 -</p>
        </section>
    );
};

export default GallerySection;
