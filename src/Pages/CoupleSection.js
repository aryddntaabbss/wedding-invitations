import React from 'react';

const CoupleSection = () => (
    <section className="text-center py-12 bg-pink-50">
        <h2 className="text-3xl font-semibold">Meet The Happy Couple</h2>
        <p className="mt-2 text-gray-600">We’re excited to celebrate our special day with you</p>
        <div className="flex justify-center mt-8 space-x-8">
            <div>
                <img src="/path/to/groom.jpg" alt="Groom" className="rounded-full w-32 h-32 mx-auto" />
                <h3 className="mt-4 font-bold">Asep Iswanto</h3>
                <p className="text-gray-600">Son of Mr. X & Mrs. Y</p>
            </div>
            <div>
                <img src="/path/to/bride.jpg" alt="Bride" className="rounded-full w-32 h-32 mx-auto" />
                <h3 className="mt-4 font-bold">Putri Ananda</h3>
                <p className="text-gray-600">Daughter of Mr. Z & Mrs. W</p>
            </div>
        </div>
    </section>
);

export default CoupleSection;
