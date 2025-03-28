import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageSrc, imageAlt, imageWidth, imageHeight }) => {
  return (
    <motion.div
      className="bg-gradient-to-br from-white-900 to-white-800 rounded-xl shadow-lg border border-gray-300 flex flex-col items-center justify-start overflow-hidden"
      style={{ width: '100%', maxWidth: '500px', height: '600px' }} // Default size
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-80 object-cover"
        style={{ borderTopLeftRadius: 'inherit', borderTopRightRadius: 'inherit' }}
      />
      <motion.h3
        className="text-2xl font-semibold mt-10 text-blue-500 text-center"
        whileHover={{ scale: 1.1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="text-gray-700 text-center mt-4 text-xl px-4"
        initial={{ opacity: 0.6 }}
        whileHover={{ opacity: 1 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Operations: React.FC = () => {
  return (
    <div className="bg-white-900 py-20 border-t-2 border-gray-300">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-blue-600 font-bold my-8 text-center">
          Our Solutions
        </h2>

        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          <Card
            title="Structural Health Monitoring"
            description="Our AI platform provides real-time structural monitoring for bridges, using advanced sensor data to track structural integrity and identify potential risks before they become critical."
            imageSrc="/enhanced2.webp"
            imageAlt="Structural Health Monitoring"
            imageWidth={500}
            imageHeight={300}
          />
          <Card
            title="Data-Driven Maintenance Insights"
            description="Leveraging historical data, our system predicts maintenance needs and provides actionable insights, enabling proactive care for bridges and enhancing structural safety."
            imageSrc="/csms.png"
            imageAlt="Data-Driven Maintenance Insights"
            imageWidth={500}
            imageHeight={300}
          />
          <Card
            title="Structural Forecasting Modeling"
            description="Our advanced forecasting models analyze real-time data from bridge sensors to predict stress and load
              impacts, allowing operators to plan timely interventions and reduce the risk of structural issues."
            imageSrc="/gateway.gif"
            imageAlt="Structure forecasting modelling"
            imageWidth={500}
            imageHeight={300}
          />
        </div>
      </div>
    </div>
  );
};

export default Operations;
