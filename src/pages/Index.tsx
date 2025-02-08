
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
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-light text-center">
            Our Services
          </h2>

          {/* First Service Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 py-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-text-light">Luxury Accommodations</h3>
              <p className="text-text-light">
                Experience unparalleled comfort in our meticulously designed spaces. Each room is crafted to provide the perfect blend of modern luxury and homely comfort.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                alt="Luxury accommodation"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Second Service Section */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8 py-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-text-light">Personalized Service</h3>
              <p className="text-text-light">
                Our dedicated team ensures your every need is met with the highest level of attention and care. We pride ourselves on creating memorable experiences.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Personalized service"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>

          {/* Third Service Section */}
          <div className="flex flex-col md:flex-row items-center gap-8 py-12">
            <div className="w-full md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold text-text-light">Exclusive Experiences</h3>
              <p className="text-text-light">
                Discover unique and carefully curated experiences that go beyond the ordinary. From private tours to specialized events, we make every moment special.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1501854140801-50d01698950b"
                alt="Exclusive experiences"
                className="rounded-lg shadow-xl w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
