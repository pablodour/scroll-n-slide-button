import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);

      // When the page is fully scrolled (with a small threshold)
      const scrollBottom = window.innerHeight + scrollPosition;
      const documentHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollBottom >= documentHeight - 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      onClick={() => navigate('/contact')}
      className={`fixed z-50 transition-all duration-500 ease-in-out 
        ${
          isAtBottom
            ? 'bottom-8 right-8 bg-accent hover:bg-primary shadow-lg backdrop-blur-md'
            : isScrolled
            ? 'top-8 right-8 bg-accent hover:bg-primary shadow-lg backdrop-blur-md'
            : 'top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent hover:bg-primary'
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
