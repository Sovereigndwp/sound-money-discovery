import React, { useEffect } from 'react';

const questions = [
  {
    icon: '🔍',
    title: 'What is money, really?',
    border: 'border-purple-500',
    prompts: [
      '→ If you had to define money without using the word "money," what would you say it is?',
      '→ Why do we all accept small pieces of paper or numbers on a screen in exchange for real things like food and shelter?'
    ]
  },
  {
    icon: '🧠',
    title: 'Who gets to decide what money is?',
    border: 'border-blue-500',
    prompts: [
      '→ Did we, as a society, ever vote on what counts as money?',
      '→ What happens when that power is in the hands of just a few people?'
    ]
  },
  {
    icon: '💸',
    title: 'If new money can be created at will...',
    border: 'border-red-500',
    prompts: [
      '→ Would you feel safe storing your savings in something that can be printed endlessly?',
      '→ What would happen if gold were suddenly easy and cheap to find?'
    ]
  },
  {
    icon: '⚖️',
    title: 'Is our financial system fair—or just familiar?',
    border: 'border-green-500',
    prompts: [
      '→ Who benefits the most from the current system?',
      '→ Who gets left behind? And why?'
    ]
  },
  {
    icon: '🛠️',
    title: 'What if you could build better money?',
    border: 'border-yellow-500',
    prompts: [
      '→ How would you design a system where no one could cheat or change the rules without consent?',
      '→ Would it need to be fast, global, scarce, secure, transparent, or something else?'
    ]
  }
];

const QuestionsSection = () => {
  useEffect(() => {
    // Trigger reveal animations when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll('#questions .reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="questions" className="py-20 bg-gradient-to-b from-deep-black to-gray-900 text-warm-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 reveal">
            <span className="gradient-text">Question</span> Everything
          </h2>
          <div className="text-xl text-gray-300 max-w-2xl mx-auto reveal space-y-2">
            <p>Challenge your assumptions.</p>
            <p>Awaken your curiosity.</p>
            <p className="text-bitcoin-orange font-semibold">Don't trust. Verify.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {questions.map((q, index) => (
            <div
              key={index}
              className={`card-hover bg-gray-800 rounded-2xl p-8 border-l-4 ${q.border} reveal`}
            >
              <div className="text-4xl mb-4">{q.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-bitcoin-orange">{q.title}</h3>
              <div className="space-y-3 text-gray-300">
                {q.prompts.map((p, i) => (
                  <p key={i} className="text-sm">{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuestionsSection;
