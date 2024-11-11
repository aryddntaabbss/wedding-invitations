import React, { useEffect, useState } from 'react';

const CountdownSection = () =>
{
    const [ timeLeft, setTimeLeft ] = useState( { days: 0, hours: 0, minutes: 0, seconds: 0 } );

    useEffect( () =>
    {
        const countdownDate = new Date( '02 Feb 2025 08:30:00' ).getTime();
        const interval = setInterval( () =>
        {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            setTimeLeft( {
                days: Math.floor( distance / ( 1000 * 60 * 60 * 24 ) ),
                hours: Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ),
                minutes: Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ),
                seconds: Math.floor( ( distance % ( 1000 ) ) / 1000 ),
            } );
        }, 1000 );

        return () => clearInterval( interval );
    }, [] );

    return (
        <section className="py-8 bg-white text-center">
            <h2 className="text-2xl font-bold">We’re Getting Married!</h2>
            <div className="flex justify-center space-x-4 mt-4">
                { [ 'days', 'hours', 'minutes', 'seconds' ].map( ( unit, index ) => (
                    <div key={ index } className="bg-pink-100 p-4 rounded-lg">
                        <p className="text-2xl font-semibold">{ timeLeft[ unit ] }</p>
                        <p className="text-sm text-gray-600">{ unit }</p>
                    </div>
                ) ) }
            </div>
        </section>
    );
};

export default CountdownSection;
