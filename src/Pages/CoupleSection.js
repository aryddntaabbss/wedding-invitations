import React, { useEffect, useState } from 'react';
import { fetchWeddingImages } from '../unsplashAPI';

const CoupleSection = () =>
{
    const [ groomImage, setGroomImage ] = useState( '' );
    const [ brideImage, setBrideImage ] = useState( '' );

    useEffect( () =>
    {
        const getImages = async () =>
        {
            const groomImg = await fetchWeddingImages( 'groom' );
            const brideImg = await fetchWeddingImages( 'bride' );
            setGroomImage( groomImg );
            setBrideImage( brideImg );
        };
        getImages();
    }, [] );

    return (
        <section className="text-center py-12 px-5 bg-white">
            <h2 className="text-3xl font-semibold">Meet The Happy Couple</h2>
            <p className="mt-2 text-gray-600">We’re excited to celebrate our special day with you</p>
            <div className="flex justify-center mt-8 space-x-8">
                <div>
                    <img src={ groomImage } alt="Groom" className="rounded-full w-32 h-32 mx-auto" />
                    <h3 className="mt-4 font-bold">Asep Iswanto</h3>
                    <p className="text-gray-600">Son of Mr. X & Mrs. Y</p>
                </div>
                <div>
                    <img src={ brideImage } alt="Bride" className="rounded-full w-32 h-32 mx-auto" />
                    <h3 className="mt-4 font-bold">Putri Ananda</h3>
                    <p className="text-gray-600">Daughter of Mr. Z & Mrs. W</p>
                </div>
            </div>
        </section>
    );
};

export default CoupleSection;
