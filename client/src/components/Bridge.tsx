import React from 'react';

const BridgeHealthMonitoring: React.FC = () => {
  return (
    <div className="bg-white py-8" id='about'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl text-center font-bold text-gray-900 mb-4">Bridge Health Monitoring System</h1>
          <p className="text-gray-600 leading-relaxed">
          HealthAI - Bridge Health Monitoring System is an advanced, real-time platform for monitoring and analyzing bridge conditions. It continuously gathers data from the sensors installed on our clients structures to measure dynamic responses over time. Engineers and inspectors can easily visualize historical and real-time data, enabling proactive maintenance and problem-solving. Leveraging machine learning models trained on historical bridge sensor data, the platform provides valuable insights to enhance bridge safety and longevity.
          </p>
        </div>

        <div className="flex justify-center">
          <img src="bridge1.jpg" alt="Bridge Health Monitoring" className="w-full max-w-4xl object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  );
};

export default BridgeHealthMonitoring;
