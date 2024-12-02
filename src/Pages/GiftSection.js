import React from 'react';

const GiftSection = () =>
{
    return (
        <section className="py-12 px-5 bg-white text-center">
            <img
                src="/img/ornament/flower2.png"
                alt="Ornament"
                className="mx-auto h-28"
            />
            <h2 className="text-4xl font-semibold text-black font-wedding">Give a Gift</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis luctus est pretium tempus.
            </p>

            <div className="flex flex-col md:flex-row justify-center mt-8 space-y-6 md:space-y-0 md:space-x-8">
                {/* Digital Wallet */ }
                <div className="bg-lime-900 p-6 rounded-lg shadow-xl w-full md:w-1/3 text-white">
                    <h3 className="text-xl font-semibold ">Digital Wallet</h3>
                    <p className=" mt-2">Agil A. Abbas</p>
                    <p className=" font-semibold">001 - 0221 2444 23</p>
                    <p className=" mt-4">Putri Safika</p>
                    <p className=" font-semibold">001 - 0221 2444 24</p>
                </div>

                {/* Offline Gift */ }
                <div className="bg-gray-100  p-6 rounded-lg shadow-lg w-full md:w-1/3">
                    <h3 className="text-xl font-semibold text-gray-800">Offline Gift</h3>
                    <p className="text-gray-600 mt-2">Jl. Mawar Indah No. 24, Cicaheum, Bandung</p>
                    <a
                        href="https://www.google.com/maps"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 bg-lime-900 px-4 py-2 rounded-lg hover:bg-lime-950 text-white"
                    >
                        Open Map
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GiftSection;
