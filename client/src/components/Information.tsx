import React from 'react';
import { motion } from 'framer-motion';

const Information: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Title */}
      <motion.h1
        className="text-4xl font-extrabold text-center text-blue-800 mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About HealthAI
      </motion.h1>

      {/* Introduction Section */}
      <motion.section
        id="introduction"
        className="mb-16 bg-blue-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Introduction
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
        HealthAI is an AI-driven platform dedicated to revolutionizing infrastructure monitoring and maintenance, specifically for bridges. We leverage cutting-edge technologies, including IoT and machine learning, to provide real-time insights and data-driven solutions for structural health management. Our mission is to empower bridge operators to make proactive decisions, enhancing public safety and extending the lifespan of critical infrastructure.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          By continuously analyzing data from various structural sensors, our platform identifies early warning signs of deterioration or stress, allowing operators to address issues before they escalate. From structural assessments to environmental impact analysis, HealthAI offers a comprehensive solution for modern infrastructure management.
        </p>
      </motion.section>

      {/* History Section */}
      <motion.section
        id="history"
        className="mb-16 bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          History
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          HealthAI began as a vision to modernize infrastructure management through technology. Initially developed by a group of engineers passionate about safety and innovation, the platform has evolved significantly through collaborations with leading research institutions and civil engineers. Our early focus on predictive maintenance through data analysis has allowed us to set new standards in the industry.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Today, HealthAI is used globally by infrastructure agencies and private companies committed to bridge safety. Our ongoing commitment to innovation and precision has made us a trusted partner in the field of structural health monitoring.
        </p>
      </motion.section>

      {/* Value System Section */}
      <motion.section
        id="value-system"
        className="mb-16 bg-blue-100 p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-4">
          Our Values
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          At the heart of HealthAI are values that guide every decision we make. Our commitment to safety, integrity, and innovation drives us to deliver reliable and impactful solutions. We hold ourselves accountable to the highest standards, ensuring that every analysis and recommendation from our platform is accurate and ethical.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Innovation fuels our mission. By staying ahead of technological advancements, we continuously improve our platform, offering solutions that evolve with infrastructure needs. Sustainability is also central to our operations, as we aim to minimize environmental impact while promoting efficient resource management.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          HealthAI is made possible by a team of dedicated professionals who are passionate about enhancing infrastructure safety. Together, we strive to empower our clients, allowing them to make informed decisions that prioritize public safety and asset longevity.
        </p>
      </motion.section>
    </div>
  );
};

export default Information;
