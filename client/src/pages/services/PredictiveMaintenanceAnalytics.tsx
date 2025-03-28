
const PredictiveMaintenanceAnalytics = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Predictive Maintenance Analytics for Bridge Monitoring
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service4.jpg"
              alt="Predictive Maintenance Analytics"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Harness the Power of Predictive Maintenance for Bridge Safety
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Predictive maintenance analytics provide bridge operators with advanced tools to predict failures before they occur,
              preventing costly downtime and ensuring optimal safety. By leveraging AI algorithms and real-time data from
              IoT sensors, our platform analyzes structural data to forecast potential issues, enabling timely intervention.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Through predictive analytics, we can identify wear and tear, fatigue, and other stress indicators in a bridge’s
              infrastructure. This allows for maintenance to be performed proactively, significantly reducing emergency repair
              costs and extending the life of the bridge.
            </p>

          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Predictive Maintenance Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">AI-Powered Predictive Models</h4>
              <p className="text-gray-700">
                Our AI-powered algorithms analyze historical data and sensor inputs to predict potential structural failures, providing
                operators with actionable insights for preventive action.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Analytics</h4>
              <p className="text-gray-700">
                Continuous data monitoring allows our platform to provide real-time insights into the health of the bridge, alerting
                operators to potential problems before they escalate into major issues.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Failure Mode Prediction</h4>
              <p className="text-gray-700">
                Our system uses machine learning to predict failure modes based on various input factors, including load, weather conditions,
                and sensor data, helping bridge operators plan maintenance activities efficiently.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Predictive Maintenance Analytics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Reduced Downtime</h4>
              <p className="text-gray-700">
                By identifying potential issues early, predictive maintenance minimizes unscheduled downtime, helping maintain
                smooth bridge operations and ensuring safety for all users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost Savings</h4>
              <p className="text-gray-700">
                Predictive maintenance helps bridge operators avoid expensive emergency repairs by proactively addressing
                issues, ultimately reducing overall maintenance costs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Extended Infrastructure Life</h4>
              <p className="text-gray-700">
                Our predictive analytics enable targeted maintenance, ensuring bridges are repaired when needed, prolonging
                the lifespan of the infrastructure and enhancing safety.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Success Stories from Our Predictive Maintenance Clients
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Learn how our predictive maintenance platform has transformed bridge maintenance, saving costs and preventing
            unexpected failures for operators around the world.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Early Detection of Wear & Tear</h4>
              <p className="text-gray-700">
                A major city bridge used our predictive maintenance platform to detect wear and tear on critical components, leading
                to early repairs and avoiding expensive emergency work.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Insights in Mountain Bridges</h4>
              <p className="text-gray-700">
                Our system helped mountain bridge operators predict potential structural failure caused by weather-related stress,
                reducing the risk of catastrophic incidents during heavy storms.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Optimizing Maintenance Schedules</h4>
              <p className="text-gray-700">
                A national highway bridge used our platform to optimize its maintenance schedule based on real-time data, ensuring
                that repairs were performed when necessary, minimizing costs and disruptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictiveMaintenanceAnalytics;
