import React from 'react';
import WeddingImage from '../components/WeddingImage';

const MapSection = () =>
{

    return (
        <section className="bg-white text-center">
            {/* <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="absolute inset-0 z-0">
                        <WeddingImage
                            imageName="img-(10).jpg"
                            altText="Wedding background"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                        <h3 className="text-2xl font-semibold">Wedding Ceremony</h3>
                        <p className="text-gray-300 mt-1">07:00 - 08:00</p>
                        <p className="mt-4 font-bold">Raffles Hotel</p>
                        <p className="text-sm mt-2">Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291</p>
                        <a
                            href="https://www.google.com/maps" // Ganti dengan link Google Maps yang spesifik jika ada
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block mt-4 bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50"
                        >
                            Open Map
                        </a>
                    </div>
                </div>

                <div className="absolute inset-0 z-0">
                    <WeddingImage
                        imageName="img-(10).jpg"
                        altText="Wedding background"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                    <h3 className="text-2xl font-semibold">Wedding Party</h3>
                    <p className="text-gray-300 mt-1">11:00 - 14:00</p>
                    <p className="mt-4 font-bold">Bride's House</p>
                    <p className="text-sm mt-2">Jl. Jakarta Raya No.221, Cicaheum, Kec. Kiaracondong, Kota Bandung, Jawa Barat 40291</p>
                    <a
                        href="https://www.google.com/maps" // Ganti dengan link Google Maps yang spesifik jika ada
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block mt-4 bg-white bg-opacity-25 px-4 py-2 rounded-lg hover:bg-opacity-50"
                    >
                        Open Map
                    </a>
                </div>
            </div> */}

            {/* Google Map Embed */ }
            <div>
                <iframe
                    src="https://maps.google.com/maps?q=Bandung&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={ { border: 0 } }
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    title="Wedding Location Map"
                ></iframe>
            </div>

            <p className="text-gray-600 mt-4">
                It is an honor and happiness for us if Mr / Ms / Brother (i) is willing to attend to give blessings to the bride and groom.
            </p>
        </section>
    );
};

export default MapSection;
