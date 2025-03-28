const StructuralHealthMonitoring = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Structural Health Monitoring for Bridges
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/enhanced.webp"
              alt="Structural Health Monitoring"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Real-Time Monitoring with AI-Driven Insights
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Our cutting-edge AI platform provides real-time structural monitoring for bridges. By leveraging sensor data
              from key structural points, the system continuously assesses the integrity of the bridge and detects early
              warning signs of potential failure. This predictive capability allows for proactive maintenance, significantly
              reducing the risks of catastrophic events and ensuring the safety of users.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              The platform integrates seamlessly with existing infrastructure, using advanced algorithms to analyze sensor data
              from strain gauges, accelerometers, and displacement sensors. This allows for continuous structural analysis,
              helping engineers and maintenance teams make informed decisions and prioritize repairs efficiently.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Our Solution
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Data Collection</h4>
              <p className="text-gray-700">
                Our system collects real-time data from multiple sensors deployed across the bridge, providing constant
                feedback on the structure's health. This data is continuously analyzed to ensure that any abnormal behavior is detected early.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Analytics</h4>
              <p className="text-gray-700">
                Using machine learning algorithms, our platform predicts the potential for structural failure before it happens,
                allowing for maintenance to be performed at the optimal time, reducing downtime and overall repair costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Comprehensive Reporting</h4>
              <p className="text-gray-700">
                Detailed reports are generated to track the health of the bridge over time. These reports include insights into
                any issues detected, severity levels, and recommended actions, enabling engineers to make quick, data-backed decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Structural Health Monitoring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Increased Safety</h4>
              <p className="text-gray-700">
                By detecting issues early, our platform helps prevent catastrophic failures, ensuring the safety of both
                the bridge and its users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost-Effective Maintenance</h4>
              <p className="text-gray-700">
                Proactive maintenance minimizes emergency repairs and extends the lifespan of the structure, ultimately
                lowering the total cost of ownership.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Optimized Resource Allocation</h4>
              <p className="text-gray-700">
                The platform allows engineers to prioritize repairs based on severity, ensuring that resources are allocated
                efficiently to the most urgent issues.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Case Studies
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover how our platform has been successfully implemented in real-world scenarios to improve bridge safety and
            maintenance.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Bridge in Downtown Metro</h4>
              <p className="text-gray-700">
                A critical bridge in a busy downtown area was equipped with our monitoring system, identifying stress
                points and preventing a major structural failure that would have caused extensive damage.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Mountain Pass Bridge</h4>
              <p className="text-gray-700">
                Our platform helped monitor a mountain pass bridge, detecting early signs of wear from environmental
                stressors, leading to scheduled maintenance before any serious issues arose.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Coastal Highway Bridge</h4>
              <p className="text-gray-700">
                By monitoring the effects of salty air and heavy traffic, our system was able to predict when corrosion would
                begin, allowing the bridge to be treated before it compromised structural integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralHealthMonitoring;
