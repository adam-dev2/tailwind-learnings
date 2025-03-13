import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen bg-cover bg-center relative flex flex-col items-center justify-center text-center"
      style={{ backgroundImage: "url('/1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I am <span className="text-amber-400">Adam</span>.
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-80">
          I am a frontend web developer. I provide clean code and pixel-perfect design. 
          I also make websites more interactive with web animations.
        </p>

        {/* Social Icons */}
        <div className="mt-6 flex gap-4 justify-center">
          <a href="#" className="text-white hover:text-amber-400 text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-white hover:text-amber-400 text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-white hover:text-amber-400 text-2xl">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
