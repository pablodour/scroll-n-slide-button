
import ImageCarousel from '../components/ImageCarousel';
import ContactButton from '../components/ContactButton';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <ImageCarousel />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-text-light z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center max-w-4xl mx-auto px-4 animate-fade-in mb-24">
          Experience Luxury Like Never Before
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-center max-w-2xl mx-auto px-4 animate-fade-in opacity-90">
          Discover a world of elegance and sophistication
        </p>
      </div>
      <ContactButton />
      
      <div className="bg-primary min-h-screen p-8">
        <div className="max-w-4xl mx-auto space-y-12 py-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text text-center">
            Welcome to Excellence
          </h2>
          <p className="text-text-light text-lg text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
