import React from 'react';

const WeddingImage = ( { imageName, altText, className } ) =>
{
    const imagePath = `/img/${ imageName }`; // Correct image path

    return (
        <img
            src={ imagePath }
            alt={ altText }
            className={ className }
        />
    );
};

export default WeddingImage;
