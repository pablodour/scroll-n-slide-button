
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#FEFDFB]/80 backdrop-blur-sm border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <img
              src="/lovable-uploads/04f7f36c-1ac8-4463-897b-f887a4de22c3.png"
              alt="Alex Lopez Personal Trainer"
              className="h-12"
            />
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <button
              onClick={() => {
                const element = document.getElementById('services');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#000000] hover:text-[#CCDDB9] px-3 py-2 rounded-md text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => {
                const element = document.getElementById('about');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-[#000000] hover:text-[#CCDDB9] px-3 py-2 rounded-md text-sm font-medium"
            >
              About
            </button>
            <button
              onClick={() => navigate('/contact')}
              className="text-[#000000] hover:text-[#CCDDB9] px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
