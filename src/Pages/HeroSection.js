import React from 'react';
import WeddingImage from '../components/WeddingImage'; // Import the WeddingImage component
import CountdownSection from './CountdownSection';

const Hero = () =>
{
    return (

        <div className="min-h-screen relative">
            {/* Background image container */ }
            <div className="absolute inset-0 z-0">
                <WeddingImage
                    imageName="img-(10).jpg"
                    altText="Wedding background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Overlay with gradient (white fading into transparent) */ }
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-100"></div>

            {/* Main content on top of the background */ }
            <div className="text-center text-white relative z-20 flex flex-col justify-center items-center min-h-screen px-4">
                <img
                    src="/img/ornament/flower2.png"
                    alt="Ornament"
                    className="mx-auto h-20"
                />
                <h2 className="text-3xl font-ubuntu font-medium pb-16">THE WEDDING OF</h2>

                {/* Couple's names */ }
                <div className="text-center text-white relative z-10 flex flex-col justify-center">
                    <h1 className="text-8xl font-medium font-wedding">Agil</h1>
                    <h1 className="text-4xl font-medium font-wedding py-2">&amp;</h1>
                    <h1 className="text-8xl font-medium font-wedding">Putri</h1>
                </div>
                <p className="py-5 mx-10 font-ubuntu w-auto text-lg text-white">
                    Ya Allah the Most Loving With Your blessing, You brought us together in a holy marriage bond
                </p>

                {/* Wedding date */ }
                <p className=" text-lg font-ubuntu">12 | <span className='text-xl font-semibold'>December</span> | 2024</p>
                <CountdownSection />
            </div>
        </div >


    );
};

export default Hero;
