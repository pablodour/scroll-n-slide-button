
import { useEffect, useState } from 'react';

import './css/ContactButton.css';

const ContactButton: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isAtBottom, setIsAtBottom] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            setIsScrolled(scrollY > 100);
            setIsAtBottom(scrollY + windowHeight >= documentHeight - 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`contact-button-container ${isScrolled ? 'side' : ''} ${isAtBottom ? 'bottom' : ''}`}>
            <button className="contact-button">Contact Now</button>
        </div>
    );
};

export default ContactButton;
