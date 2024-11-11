import React from 'react';

const GuestBook = () =>
{
    const messages = [
        { name: 'Tia SMANBDB', status: 'Attending', message: 'Congratulations!' },
        { name: 'Muhito Rohwa', status: 'Not Attending', message: 'Happy wedding day ahead!' },
        { name: 'Alia Sena P', status: 'Attending', message: 'Best wishes!' },
    ];

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="text-3xl font-semibold text-pink-600">Guest Book</h2>
            <div className="mt-8 max-w-lg mx-auto space-y-4">
                { messages.map( ( msg, index ) => (
                    <div key={ index } className="bg-white p-4 rounded-lg shadow-lg">
                        <p className="font-semibold text-gray-800">{ msg.name }</p>
                        <p className={ `text-sm ${ msg.status === 'Attending' ? 'text-green-500' : 'text-yellow-500' }` }>
                            { msg.status }
                        </p>
                        <p className="text-gray-600 mt-2">{ msg.message }</p>
                    </div>
                ) ) }
            </div>
        </section>
    );
};

export default GuestBook;
