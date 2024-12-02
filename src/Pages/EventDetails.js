import React from 'react';

const EventDetails = () => (
    <div className="py-8 px-5 bg-lime-900 text-center text-white">
        <img
            src="/img/ornament/flower2.png"
            alt="Ornament"
            className="mx-auto h-28"
        />
        <h2 className="text-4xl font-bold font-wedding">Wedding Ceremony & Party</h2>
        <div className="mt-6 flex justify-center space-x-8">
            <div>
                <h3 className="font-bold">Wedding Ceremony</h3>
                <p>Baiturrahman Mosque</p>
                <p>10:00 AM - 12:00 PM</p>
            </div>
            <div>
                <h3 className="font-bold">Wedding Party</h3>
                <p>Grand Ballroom Hotel</p>
                <p>6:00 PM - 10:00 PM</p>
            </div>
        </div>
    </div>
);

export default EventDetails;
