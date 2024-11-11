// src/components/HeroSection.js
import React, { useEffect, useState } from 'react';
import { fetchWeddingImages } from '../unsplashAPI';

const HeroSection = () =>
{
    const [ backgroundImage, setBackgroundImage ] = useState( '' );

    useEffect( () =>
    {
        const getImage = async () =>
        {
            const imageUrl = await fetchWeddingImages( 'wedding forest' ); // Tema gambar
            setBackgroundImage( imageUrl );
        };
        getImage();
    }, [] );

    return (
        <div
            className="h-screen bg-cover bg-center relative"
            style={ { backgroundImage: `url(${ backgroundImage })` } }
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="text-center text-white relative z-10 flex flex-col justify-center h-full">
                <p className="font-ubuntu text-lg text-gray-300">Ya Allah the Most Loving</p>
                <p className="pt-2 font-ubuntu text-lg text-gray-300 px-2">With Your blessing, you brought us together in a holy marriage bond</p>
                <h2 className="text-3xl font-ubuntu font-medium py-16">THE WEDDING OF</h2>
                <div className="text-center text-white relative z-10 flex flex-col justify-center">
                    <h1 className="text-8xl font-medium font-wedding pr-28 lg:mr-48">Asep</h1>
                    <h1 className="text-7xl font-medium font-wedding">&</h1>
                    <h1 className="text-8xl font-medium font-wedding pl-28 lg:ml-48">Putri</h1>
                </div>
                <p className="pt-4 text-lg font-ubuntu">- 02 Februari 2022 -</p>
            </div>
        </div>
    );
};

export default HeroSection;
