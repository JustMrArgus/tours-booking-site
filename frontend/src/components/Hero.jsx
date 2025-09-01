const Hero = () => {
  return (
    <div className="relative h-[70vh] w-full">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/img/hero-image.jpg')]"></div>
      <div className="bg-black opacity-75 inset-0 absolute"></div>
      <div className="h-full flex items-center justify-center">
        <div className="relative text-white text-center">
          <h1 className="uppercase font-lato font-bold text-6xl mb-2">
            Tour Booking Site
          </h1>
          <p className="text-[1.1rem] font-lato">
            Your greatest superhero collection
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
