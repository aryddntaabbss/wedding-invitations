import React, { useState } from 'react';

const SaySomething = () =>
{
    const [ name, setName ] = useState( '' );
    const [ message, setMessage ] = useState( '' );
    const [ attendance, setAttendance ] = useState( '' );

    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        // Logic untuk submit form bisa ditambahkan di sini
        console.log( { name, message, attendance } );
    };

    return (
        <section className="py-12 bg-white text-center">
            <h2 className="text-3xl font-semibold text-pink-600">Say Something!</h2>
            <form onSubmit={ handleSubmit } className="mt-8 max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4">
                <input
                    type="text"
                    placeholder="Name"
                    value={ name }
                    onChange={ ( e ) => setName( e.target.value ) }
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                />
                <textarea
                    placeholder="Message"
                    value={ message }
                    onChange={ ( e ) => setMessage( e.target.value ) }
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-pink-200"
                    rows="4"
                ></textarea>
                <div className="flex items-center justify-center space-x-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="attendance"
                            value="yes"
                            checked={ attendance === 'yes' }
                            onChange={ ( e ) => setAttendance( e.target.value ) }
                        />
                        <span>Yes</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="attendance"
                            value="no"
                            checked={ attendance === 'no' }
                            onChange={ ( e ) => setAttendance( e.target.value ) }
                        />
                        <span>No</span>
                    </label>
                </div>
                <button type="submit" className="w-full py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-700">
                    Send Here!
                </button>
            </form>
        </section>
    );
};

export default SaySomething;
