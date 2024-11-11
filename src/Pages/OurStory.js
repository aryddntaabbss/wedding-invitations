import React from 'react';

const OurStory = () => (
    <section className="py-8 bg-white text-center">
        <h2 className="text-3xl font-semibold">Our Story</h2>
        <div className="flex justify-center space-x-8 mt-6">
            <div>
                <img src="/path/to/photo1.jpg" alt="Our Story 1" className="rounded-lg" />
                <p className="text-gray-600 mt-4">Cerita pendek pertama...</p>
            </div>
            <div>
                <img src="/path/to/photo2.jpg" alt="Our Story 2" className="rounded-lg" />
                <p className="text-gray-600 mt-4">Cerita pendek kedua...</p>
            </div>
        </div>
    </section>
);

export default OurStory;
