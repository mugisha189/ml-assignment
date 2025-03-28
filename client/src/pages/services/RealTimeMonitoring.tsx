
const RealTimeMonitoring = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Real-Time Monitoring for Bridge Infrastructure
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service5.jpg"
              alt="Real-Time Monitoring"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Monitor Bridge Health in Real-Time with IoT Sensors
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Real-time monitoring enables bridge operators to track the health and structural integrity of bridges
              through continuous data collection from IoT sensors deployed on key structural components. This technology
              provides insights into stress, strain, temperature, vibration, and other critical factors impacting the bridge’s
              safety and longevity.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              With the data collected in real-time, our platform empowers operators with immediate access to insights, allowing
              for timely intervention when anomalies or risks are detected. This capability helps prevent catastrophic failures,
              ensuring bridge safety and reducing costly repairs.
            </p>

          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Real-Time Monitoring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Continuous Sensor Data Collection</h4>
              <p className="text-gray-700">
                Real-time data from IoT sensors on the bridge’s key structural elements ensures constant monitoring of health indicators, including vibration, strain, and temperature.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Instant Anomaly Detection</h4>
              <p className="text-gray-700">
                The system detects anomalies and irregularities in real-time, alerting operators immediately if the bridge structure shows signs of stress or potential failure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Live Data Dashboards</h4>
              <p className="text-gray-700">
                Our intuitive dashboards display live data feeds, offering an easy-to-read overview of the bridge’s health and performance metrics in real-time.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Real-Time Monitoring for Bridge Operators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Enhanced Safety</h4>
              <p className="text-gray-700">
                Real-time monitoring ensures that operators are immediately aware of any unusual structural behavior, enabling timely action and enhancing overall bridge safety.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Reduced Maintenance Costs</h4>
              <p className="text-gray-700">
                By identifying issues early, real-time monitoring helps reduce the need for emergency repairs and prolongs the lifespan of the infrastructure, resulting in cost savings.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Proactive Risk Management</h4>
              <p className="text-gray-700">
                The system allows for proactive risk management by providing actionable data on the current condition of the bridge, preventing catastrophic failures and ensuring smooth operations.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Success Stories from Real-Time Monitoring Clients
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            See how real-time monitoring has helped bridge operators worldwide detect issues before they become critical and prevent failures that could otherwise be disastrous.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Early Detection of Cracks in Highway Bridges</h4>
              <p className="text-gray-700">
                A highway bridge utilized real-time monitoring to detect microcracks that could have compromised its structural integrity, allowing for early intervention and avoiding collapse.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Storm-Impact Analysis on Coastal Bridges</h4>
              <p className="text-gray-700">
                Real-time monitoring on coastal bridges helped operators analyze the impact of severe storms, with sensors providing data that allowed for immediate post-storm inspections and repairs.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Vibration Monitoring in Suspension Bridges</h4>
              <p className="text-gray-700">
                A suspension bridge used real-time vibration monitoring to detect unusual oscillations that could indicate a problem with the tensioning cables, preventing a major failure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeMonitoring;
