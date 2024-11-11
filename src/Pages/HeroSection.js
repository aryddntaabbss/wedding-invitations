import React from 'react';

const HeroSection = () => (
    <div className="h-screen bg-cover bg-center relative" style={ { backgroundImage: 'url("/path/to/background.jpg")' } }>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white relative z-10 flex flex-col justify-center h-full">
            <h2 className="text-lg font-light">You're Invited To The Wedding Of</h2>
            <h1 className="text-5xl font-bold mt-2">Asep & Putri</h1>
            <p className="mt-4">02 Februari 2022</p>
        </div>
    </div>
);

export default HeroSection;
