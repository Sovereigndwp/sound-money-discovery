import React from 'react';
import HeroSection from '../components/HeroSection';
import QuestionsSection from '../components/QuestionsSection';

const Homepage = () => {
  const scrollToQuestions = () => {
    const section = document.getElementById('questions');
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <HeroSection onScrollClick={scrollToQuestions} />
      <QuestionsSection />
      {/* Next up: FeaturesSection and CTASection */}
    </>
  );
};

export default Homepage;
