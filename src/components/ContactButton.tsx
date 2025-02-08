
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => navigate('/contact')}
      className={`fixed z-50 transition-all duration-500 ease-in-out 
        ${
          isScrolled
            ? 'top-8 right-8 bg-white/80 hover:bg-white shadow-lg backdrop-blur-md'
            : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white hover:bg-gray-50'
        }
        px-6 py-3 rounded-full text-text font-medium
        hover:scale-105 active:scale-95 transform
      `}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
