import React, { useState } from 'react';
import elephant from './elephant.jpg';
import baby3 from './baby3.avif';
import baby4 from './baby4.avif';
import deer from './deer.avif';
import './Styling.css';

const images = [elephant, baby3, baby4, deer];

function Sliding() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="slider-container">
            <button onClick={prevSlide} className="slider-button">Previous</button>
            <img src={images[currentIndex]} alt="Sliding" className="slider-image" />
            <button onClick={nextSlide} className="slider-button">Next</button>
        </div>
    );
}

export default Sliding;