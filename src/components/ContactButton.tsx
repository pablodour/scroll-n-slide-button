
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactButton = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      const scrollBottom = window.innerHeight + scrollY;
      const docHeight = document.documentElement.scrollHeight;
      setIsAtBottom(scrollBottom >= docHeight - 1);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonClasses = isAtBottom 
    ? 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary-dark shadow-lg'
    : isScrolled 
    ? 'fixed right-8 bottom-8 bg-primary hover:bg-primary-dark shadow-lg'
    : 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary hover:bg-primary-dark';

  return (
    <button
      onClick={() => navigate('/contact')}
      className={`${buttonClasses} transition-all duration-300 ease-in-out px-6 py-3 rounded-full text-text font-medium hover:scale-105 active:scale-95 z-50`}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
