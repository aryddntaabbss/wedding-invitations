import React from 'react';
import WeddingImage from '../components/WeddingImage';

const GallerySection = () =>
{

    return (
        <section className="py-12 px-5 text-center">
            <img
                src="/img/ornament/flower2.png"
                alt="Ornament"
                className="mx-auto h-28"
            />
            <h2 className="text-4xl font-bold font-wedding">Our Gallery</h2>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                <WeddingImage
                    imageName="img-(2).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
                <WeddingImage
                    imageName="img-(3).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
                <WeddingImage
                    imageName="img-(4).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
                <WeddingImage
                    imageName="img-(5).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
                <WeddingImage
                    imageName="img-(6).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
                <WeddingImage
                    imageName="img-(7).jpg"
                    altText="Couple"
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                />
            </div>

            <p className="text-gray-600 mt-8 italic max-w-2xl mx-auto">
                "And among His verses is that He has created for you wives of your own kind, so that you may feel comfortable in them, and He has made between you mawaddah and mercy. Verily in that are signs for the people who think"
            </p>
            <p className="text-gray-600 mt-2 font-semibold">- AR-RUM 21 -</p>
        </section>
    );
};

export default GallerySection;
