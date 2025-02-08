import React from 'react';
import './css/ImageCarousel.css';
import ContactButton from './ContactButton';

const ImageCarousel: React.FC = () => {
    return (
        <div className="carousel-container">
            <h1 className="carousel-title">Welcome to Our Platform</h1>
            <div className="carousel-frame">
                {/* Your moving image component here */}
            </div>
            <ContactButton />
        </div>
    );
};

export default ImageCarousel;
