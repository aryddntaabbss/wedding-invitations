import React from 'react';
import WeddingImage from '../components/WeddingImage';

const CoupleSection = () =>
{
    return (
        <div className="text-center py-12 px-5 bg-white">
            <img
                src="/img/ornament/flower2.png"
                alt="Ornament"
                className="mx-auto h-28"
            />
            <h2 className="text-4xl font-semibold font-wedding">Meet The Happy Couple</h2>
            <p className="mt-2 text-gray-600">We’re excited to celebrate our special day with you</p>

            <div className="flex justify-center mt-8 space-x-8 flex-wrap">
                <div className="text-center">
                    <img
                        src="/img/ornament/flower4.png"
                        alt="Ornament"
                        className="absolute mx-auto h-[156px]"
                    />
                    <WeddingImage
                        imageName="img-(2).jpg"
                        altText="Couple"
                        className="rounded-full mt-5 ml-5 w-32 h-32 mx-auto object-cover"
                    />
                    <h3 className="mt-4 font-bold text-lg">Agil A. Abbas</h3>
                    <p className="text-gray-600">Son of Mr. X & Mrs. Y</p>
                </div>

                <div className="text-center align-middle">
                    <img
                        src="/img/ornament/flower4.png"
                        alt="Ornament"
                        className="absolute mx-auto h-[156px]"
                    />
                    <WeddingImage
                        imageName="img-(3).jpg"
                        altText="Couple"
                        className="rounded-full mt-5 ml-5 w-32 h-32 mx-auto object-cover"
                    />
                    <h3 className="mt-4 font-bold text-lg">Putri Safika</h3>
                    <p className="text-gray-600">Son of Mr. W & Mrs. Z</p>
                </div>
            </div>
        </div>
    );
};

export default CoupleSection;
