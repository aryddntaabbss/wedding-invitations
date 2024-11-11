import React from 'react';

const MapSection = () => (
    <section className="py-8">
        <h2 className="text-3xl font-semibold text-center">Location</h2>
        <iframe
            className="w-full h-64 mt-4"
            src="https://maps.google.com/maps?q=location%20wedding&t=&z=13&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
        ></iframe>
    </section>
);

export default MapSection;
