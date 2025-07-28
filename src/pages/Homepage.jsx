import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import QuestionsSection from '../components/QuestionsSection';
import FeaturesSection from '../components/FeaturesSection';
import CTASection from '../components/CTASection';

const Homepage = () => {
  useEffect(() => {
    const revealOnScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 150) {
          el.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const scrollToQuestions = () => {
    const questions = document.getElementById('questions');
    if (questions) questions.scrollIntoView({ behavior: 'smooth' });
  };

  const startCourse = () => {
    alert("🚀 Welcome to Sound Money Discovery! Your journey into Bitcoin and financial literacy begins now.");
    // TODO: Replace with actual navigation logic to first lesson
  };

  return (
    <main className="overflow-x-hidden">
      <HeroSection onScrollClick={scrollToQuestions} />
      <QuestionsSection />
      <FeaturesSection />
      <CTASection onStartCourse={startCourse} />
      
      {/* Footer */}
      <footer className="bg-deep-black text-gray-400 py-8 text-center">
        <div className="container mx-auto px-6">
          <p>© 2024 Sound Money Discovery. Built with ❤️ for Bitcoin education.</p>
        </div>
      </footer>
    </main>
  );
};

export default Homepage;
