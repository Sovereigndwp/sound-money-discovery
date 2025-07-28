import React from 'react';

const CTASection = ({ onStartCourse }) => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-bitcoin-orange to-orange-600">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-deep-black mb-8 reveal">
          Ready to Learn the Truth?
        </h2>
        <p className="text-xl text-deep-black mb-12 max-w-3xl mx-auto reveal">
          Join thousands of people discovering why Bitcoin represents the most important 
          monetary innovation in human history.
        </p>
        <button
          onClick={onStartCourse}
          className="bg-deep-black text-bitcoin-orange font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 reveal"
        >
          Start Your Journey Now
        </button>
      </div>
    </section>
  );
};

export default CTASection;
