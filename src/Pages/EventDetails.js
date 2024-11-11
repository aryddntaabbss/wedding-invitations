import React from 'react';

const EventDetails = () => (
    <section className="py-8 bg-pink-50 text-center">
        <h2 className="text-3xl font-semibold">Wedding Ceremony & Party</h2>
        <div className="mt-6 flex justify-center space-x-8">
            <div>
                <h3 className="font-bold">Wedding Ceremony</h3>
                <p className="text-gray-600">Baiturrahman Mosque</p>
                <p className="text-gray-600">10:00 AM - 12:00 PM</p>
            </div>
            <div>
                <h3 className="font-bold">Wedding Party</h3>
                <p className="text-gray-600">Grand Ballroom Hotel</p>
                <p className="text-gray-600">6:00 PM - 10:00 PM</p>
            </div>
        </div>
    </section>
);

export default EventDetails;
