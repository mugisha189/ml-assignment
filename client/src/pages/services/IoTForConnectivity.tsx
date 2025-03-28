const IoTForConnectivity = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          IoT for Connectivity in Bridge Monitoring Systems
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service3.jpg"
              alt="IoT for Connectivity"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Enabling Seamless Connectivity for Smart Bridge Monitoring
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              The integration of IoT technology into bridge monitoring systems offers a powerful way to enhance connectivity,
              ensuring that critical data is transmitted in real-time to improve decision-making and preventative maintenance
              efforts. Our IoT solutions enable bridges to communicate seamlessly with centralized monitoring systems, providing
              operators with a comprehensive, up-to-date overview of the infrastructure’s health.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              With our IoT-based connectivity solutions, we empower bridge operators to monitor key metrics such as stress levels,
              temperature, displacement, and vibrations. This real-time data helps detect structural issues early and minimize
              the need for costly repairs and maintenance.
            </p>
          </div>
        </div>

        {/* Key Services Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Our IoT for Connectivity Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Data Transmission</h4>
              <p className="text-gray-700">
                Our IoT devices ensure seamless, continuous data transmission from sensors embedded in the bridge to a centralized
                monitoring system, providing operators with up-to-the-minute insights into the structure’s health.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Remote Monitoring & Control</h4>
              <p className="text-gray-700">
                With IoT connectivity, you can monitor and control your bridge’s health remotely, even in real-time, without needing to
                be on-site, improving operational efficiency and reducing response times.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Maintenance Integration</h4>
              <p className="text-gray-700">
                Leverage IoT-enabled predictive analytics to anticipate potential failures in your bridge structure, reducing the
                need for reactive maintenance and extending the lifespan of the infrastructure.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of IoT for Connectivity in Bridge Monitoring
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Enhanced Data Accuracy</h4>
              <p className="text-gray-700">
                IoT technology ensures continuous, high-quality data capture, reducing the risk of human error and providing
                operators with accurate, real-time insights into the condition of the bridge.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Improved Safety & Risk Management</h4>
              <p className="text-gray-700">
                The ability to monitor bridge conditions remotely using IoT devices allows operators to identify potential hazards
                and address them before they escalate into major risks, enhancing the safety of bridge users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost Efficiency</h4>
              <p className="text-gray-700">
                IoT systems help bridge operators optimize resource allocation, reduce unnecessary maintenance, and avoid
                expensive repairs by providing timely alerts about potential issues.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Success Stories from Our IoT Connectivity Clients
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover how our IoT connectivity solutions have transformed bridge monitoring, allowing operators to respond faster and
            prevent issues before they arise.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Smart Bridge Connectivity</h4>
              <p className="text-gray-700">
                A smart bridge in a major city integrated IoT sensors, improving data transmission accuracy and streamlining
                monitoring processes, reducing response times to incidents by 30%.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Coastal Bridge Monitoring</h4>
              <p className="text-gray-700">
                IoT connectivity was implemented in a coastal bridge, enabling real-time monitoring of corrosion levels and allowing
                early intervention before major repairs were needed, saving significant maintenance costs.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Remote Monitoring of Mountain Bridges</h4>
              <p className="text-gray-700">
                Mountain bridges were equipped with IoT sensors that allowed for continuous remote monitoring of environmental
                factors, preventing structural failures caused by severe weather conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IoTForConnectivity;
