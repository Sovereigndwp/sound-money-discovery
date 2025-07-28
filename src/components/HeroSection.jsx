import React from 'react';

const HeroSection = ({ onScrollClick }) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative bg-deep-black text-warm-white overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f7931a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="floating mb-8">
          <div className="w-24 h-24 mx-auto mb-6 bg-bitcoin-orange rounded-full flex items-center justify-center pulse-glow">
            <svg className="w-12 h-12 text-deep-black" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.546z"/>
              <path d="M17.415 11.85c.23-1.542-.943-2.37-2.55-2.923l.52-2.087-1.27-.317-.507 2.033c-.334-.083-.677-.161-1.018-.237l.51-2.046-1.27-.317-.52 2.087c-.277-.063-.548-.125-.81-.19l.001-.006-1.75-.437-.337 1.353s.943.216.923.23c.515.128.608.469.593.739l-.593 2.377c.036.009.082.022.133.043l-.134-.033-.832 3.33c-.063.156-.223.39-.583.301.013.019-.923-.23-.923-.23l-.628 1.45 1.653.412c.307.077.608.157.903.233l-.525 2.107 1.269.317.52-2.087c.347.094.683.181 1.014.263l-.518 2.077 1.27.317.525-2.103c2.167.41 3.8.245 4.487-1.716.554-1.578-.027-2.49-1.167-3.084.83-.191 1.454-.735 1.621-1.86zm-2.896 4.06c-.393 1.578-3.05.725-3.91.51l.697-2.796c.86.214 3.623.638 3.213 2.286zm.393-4.08c-.358 1.435-2.571.706-3.287.527l.632-2.535c.717.179 3.035.513 2.655 2.008z"/>
            </svg>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text reveal">
          Discover <span className="gradient-text">Sound Money</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto reveal">
          Journey through the most important financial discovery of our time.{" "}
          <span className="text-bitcoin-orange font-semibold">
            Question everything you thought you knew about money.
          </span>
        </p>

        <button
          onClick={onScrollClick}
          className="bg-bitcoin-orange hover:bg-orange-600 text-deep-black font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 reveal pulse-glow"
        >
          Begin Your Discovery
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
