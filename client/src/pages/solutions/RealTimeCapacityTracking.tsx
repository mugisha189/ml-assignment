const StructuralConditionForecastModeling = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Structural Condition Forecast Modeling
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/gateway.gif"
              alt="Structural Condition Forecasting"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Anticipate Structural Strain & Enhance Durability
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Our advanced forecasting models analyze real-time data from various bridge sensors to predict stress and load
              impacts, allowing operators to plan timely interventions and reduce the risk of structural issues.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              From environmental factors to traffic loads, our system continuously assesses the bridge's condition, providing
              a detailed outlook that helps extend the lifespan of the structure while ensuring user safety.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Structural Condition Forecast Modeling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Analytics</h4>
              <p className="text-gray-700">
                Utilizing machine learning, our system forecasts wear patterns based on real-time data, ensuring preventive
                actions can be taken well in advance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Instant Notifications</h4>
              <p className="text-gray-700">
                Receive immediate alerts when potential structural risks are detected, empowering operators to take swift
                action and prevent damage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Dynamic Environmental Impact Analysis</h4>
              <p className="text-gray-700">
                Our platform accounts for environmental variables, offering detailed insight into how weather and other
                external factors affect structural integrity over time.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Structural Condition Forecast Modeling
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Enhanced Durability</h4>
              <p className="text-gray-700">
                Our predictive modeling identifies early signs of wear, reducing the need for extensive repairs and
                increasing the longevity of bridge structures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Improved Safety Standards</h4>
              <p className="text-gray-700">
                By anticipating structural strain, operators can prevent failures and ensure the safety of commuters.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost Efficiency</h4>
              <p className="text-gray-700">
                With real-time data insights, bridge operators can implement timely, targeted maintenance, reducing
                unplanned downtimes and repair costs.
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
            Explore real-world implementations where our structural condition forecasting has enhanced bridge safety and
            efficiency.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Urban Bridge in Downtown</h4>
              <p className="text-gray-700">
                Our system helped prevent strain-related failures by forecasting stress accumulation due to traffic loads and
                extreme weather, allowing operators to make informed decisions.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Highway Overpass Bridge</h4>
              <p className="text-gray-700">
                By monitoring structural health continuously, our system enabled timely interventions, reducing repair
                frequency and enhancing long-term durability.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Mountain Region Suspension Bridge</h4>
              <p className="text-gray-700">
                In a challenging environment, our predictive analytics identified key wear patterns, enabling maintenance
                crews to reinforce vulnerable points proactively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuralConditionForecastModeling;
