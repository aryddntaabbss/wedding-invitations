import React, { useEffect, useState } from 'react';

const CountdownSection = () =>
{
    const [ timeLeft, setTimeLeft ] = useState( { days: 0, hours: 0, minutes: 0, seconds: 0 } );

    useEffect( () =>
    {
        const countdownDate = new Date( '12 Dec 2024 08:30:00' ).getTime();

        const interval = setInterval( () =>
        {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            // Jika waktu sudah habis, hentikan interval
            if ( distance < 0 )
            {
                clearInterval( interval );
                setTimeLeft( { days: 0, hours: 0, minutes: 0, seconds: 0 } );
            } else
            {
                setTimeLeft( {
                    days: Math.floor( distance / ( 1000 * 60 * 60 * 24 ) ),
                    hours: Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) ),
                    minutes: Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) ),
                    seconds: Math.floor( ( distance % ( 1000 * 60 ) ) / 1000 ),
                } );
            }
        }, 1000 );

        // Bersihkan interval ketika komponen dibersihkan
        return () => clearInterval( interval );
    }, [] );

    return (
        <section className="py-8 px-5 text-center">
            <div className="flex justify-center space-x-4">
                { [ 'days', 'hours', 'minutes', 'seconds' ].map( ( unit, index ) => (
                    <div key={ index } className="shadow-2xl h-16 w-16 pt-1 rounded-lg bg-white opacity-60">
                        <p className="text-2xl text-black font-semibold">{ timeLeft[ unit ] }</p>
                        <p className="text-sm text-gray-600">{ unit }</p>
                    </div>
                ) ) }
            </div>
        </section>
    );
};

export default CountdownSection;
