const DataDrivenMaintenanceInsights = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Data-Driven Maintenance Insights for Bridge Management
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/csms.png"
              alt="Data-Driven Maintenance Insights"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Predictive Maintenance with AI-Driven Insights
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Our AI-powered platform leverages historical data and real-time sensor information to predict maintenance needs
              and provide actionable insights for proactive care of bridge structures. By analyzing trends in material wear,
              traffic loads, and environmental factors, we can forecast when and where maintenance is needed before issues
              become critical.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              By continuously monitoring structural health data, we can predict potential failures, reduce unexpected downtimes,
              and extend the lifespan of the bridge. This data-driven approach not only improves safety but also optimizes maintenance
              schedules, saving both time and money.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Data-Driven Maintenance Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Analytics</h4>
              <p className="text-gray-700">
                Our platform analyzes historical data to predict when maintenance is required, helping to prevent unexpected
                failures and optimize resource allocation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Monitoring</h4>
              <p className="text-gray-700">
                Continuously monitoring structural health indicators such as cracks, strain, and stress levels in real-time
                to provide an up-to-date view of the bridge's condition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Automated Maintenance Scheduling</h4>
              <p className="text-gray-700">
                Based on predictive insights, our system automates the scheduling of maintenance tasks, ensuring that resources
                are efficiently allocated and downtime is minimized.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Data-Driven Maintenance Insights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Proactive Maintenance</h4>
              <p className="text-gray-700">
                By predicting maintenance needs in advance, our system allows bridge operators to address potential issues
                before they become serious, reducing costly repairs and unplanned downtime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost Savings</h4>
              <p className="text-gray-700">
                Our data-driven approach ensures maintenance resources are used efficiently, leading to long-term cost savings
                by eliminating unnecessary repairs and optimizing maintenance schedules.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Extended Bridge Lifespan</h4>
              <p className="text-gray-700">
                With proactive maintenance based on accurate predictions, the lifespan of bridges can be significantly
                extended, reducing the need for costly full replacements.
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
            Explore how our data-driven maintenance insights have helped improve bridge management and reduce unexpected failures.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Bridge in Industrial Area</h4>
              <p className="text-gray-700">
                Using predictive maintenance analytics, our system successfully predicted and addressed minor cracks before they
                evolved into major issues, saving significant repair costs and reducing downtime.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Mountain Crossing Bridge</h4>
              <p className="text-gray-700">
                By continuously monitoring environmental factors and structural integrity, our system helped identify potential
                weaknesses caused by extreme weather conditions, leading to timely maintenance and enhanced safety.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Highway Bridge Overpass</h4>
              <p className="text-gray-700">
                Our AI platform provided valuable insights into wear and tear caused by heavy traffic, enabling proactive
                repairs and optimizing the bridge's maintenance cycle to improve longevity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataDrivenMaintenanceInsights;
