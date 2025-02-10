
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
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const buttonClasses = isAtBottom 
    ? 'fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-accent hover:bg-primary shadow-lg backdrop-blur-md'
    : isScrolled 
    ? 'fixed right-8 bottom-8 bg-accent hover:bg-primary shadow-lg backdrop-blur-md'
    : 'fixed bottom-8 left-1/2 -translate-x-1/2 bg-accent hover:bg-primary';

  return (
    <button
      onClick={() => navigate('/contact')}
      className={`${buttonClasses} transition-all duration-1000 ease-in-out px-6 py-3 rounded-full text-text font-medium hover:scale-105 active:scale-95`}
    >
      Contact Us
    </button>
  );
};

export default ContactButton;
