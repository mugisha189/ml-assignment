import React, { useState } from 'react';

interface FAQProps {
  questionColor?: string; // This will be a customizable prop for question color
}

const FrequentlyAskedQuestions: React.FC<FAQProps> = ({ questionColor = 'text-blue-700' }) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  const faqData = [
    {
      question: 'What is Bridge AI Monitoring System?',
      answer: 'Bridge AI Monitoring System is an advanced platform that uses artificial intelligence to continuously monitor and analyze bridge structural health, safety, and performance in real-time.'
    },
    {
      question: 'What types of sensors are used in the monitoring system?',
      answer: 'Our system employs various sensors including strain gauges, accelerometers, temperature sensors, displacement sensors, and high-resolution cameras for comprehensive structural monitoring.'
    },
    {
      question: 'How does the AI detect potential bridge issues?',
      answer: 'The AI analyzes data from multiple sensors using machine learning algorithms to detect anomalies, predict potential failures, and identify maintenance needs before they become critical issues.'
    },
    {
      question: 'What kind of alerts does the system provide?',
      answer: 'The system provides real-time alerts for critical conditions, scheduled maintenance notifications, and periodic health reports. Alerts can be customized based on severity levels and sent via email, SMS, or through the dashboard.'
    },
    {
      question: 'How accurate is the AI prediction system?',
      answer: 'Our AI system maintains a high accuracy rate of over 95% in predicting structural issues, thanks to continuous learning from vast amounts of historical data and regular model updates.'
    },
    
  ];


  return (
    <div className="bg-white rounded-lg shadow-md p-8 my-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-blue-600">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg transition-all ${activeIndex === index ? 'bg-blue-50' : 'bg-white'
              }`}
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 focus:outline-none hover:bg-blue-100 transition-all"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className={`text-lg font-medium ${questionColor}`}>{faq.question}</h3>
              <svg
                className={`w-6 h-6 transition-transform ${activeIndex === index ? 'transform rotate-180' : ''
                  } text-blue-500`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
