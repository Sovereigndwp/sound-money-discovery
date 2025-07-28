import React from 'react';

const QuestionsSection = () => {
  const questions = [
    {
      emoji: "🤔",
      title: "Have you ever wondered...",
      description: "Why does money exist? What makes something valuable as money?"
    },
    {
      emoji: "💭",
      title: "Think about it...",
      description: "Why can governments print money but you can't? What gives them this power?"
    },
    {
      emoji: "🔍",
      title: "Discover the truth...",
      description: "How Bitcoin changes everything we thought we knew about money forever."
    }
  ];

  return (
    <section id="questions" className="py-20 px-6 bg-deep-black text-warm-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal">
          What Is <span className="gradient-text">Money</span>?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="card-dark text-center p-8 reveal">
              <div className="text-6xl mb-6">{question.emoji}</div>
              <h3 className="text-xl font-bold mb-4">{question.title}</h3>
              <p className="text-gray-300">
                {question.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
