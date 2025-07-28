import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      emoji: "📚",
      title: "Interactive Learning",
      description: "Engage with hands-on exercises and simulations to understand monetary principles."
    },
    {
      emoji: "⚡",
      title: "Bitcoin Fundamentals",
      description: "Understand why Bitcoin solves fundamental problems with traditional money."
    },
    {
      emoji: "🎯",
      title: "Practical Application",
      description: "Apply your knowledge with real-world scenarios and case studies."
    }
  ];

  return (
    <section className="py-20 px-6 bg-warm-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-deep-black reveal">
          Why <span className="gradient-text">Bitcoin</span> Matters
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="card text-center reveal" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="w-12 h-12 bg-bitcoin-orange rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-white text-xl">{feature.emoji}</span>
              </div>
              <h3 className="text-xl font-semibold text-deep-black mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
