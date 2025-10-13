import { useState } from 'react';
import baby3 from './baby3.avif';
import baby4 from './baby4.avif';
import './Styling.css';

function Image() {
    const [currentImage, setCurrentImage] = useState(baby3);

    const Babyimg = () => {
        setCurrentImage(prevImage => prevImage === baby3 ? baby4 : baby3);
    };

    return (
        <div>
            <img src={currentImage} alt='Little Baby' /><br/>
            <button onClick={Babyimg}>Click Me</button>
        </div>
    );
}

export default Image;
