
const AutomatedReportingAlerts = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Automated Reporting & Alerts for Bridge Monitoring
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service1.jpg"
              alt="Automated Reporting & Alerts"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Stay Ahead with Automated Reports and Alerts
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              With our AI-driven bridge monitoring platform, automated reporting and alerts are integrated directly into the system
              for seamless monitoring of structural health. Our platform analyzes real-time sensor data and provides continuous,
              automated reports and instant alerts when anomalies are detected, ensuring rapid response to any issues.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              These reports help bridge operators and engineers monitor trends in factors such as strain, stress, temperature,
              and other critical parameters, offering a complete overview of the bridge's health status. By automating the
              reporting and alert system, we minimize human error and ensure timely interventions to maintain optimal safety and performance.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Automated Reporting & Alerts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Alerts</h4>
              <p className="text-gray-700">
                Receive instant alerts on critical structural changes or sensor anomalies, ensuring quick response times for
                necessary interventions, improving safety and performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Automated Reports</h4>
              <p className="text-gray-700">
                Automatically generated reports summarizing the structural health and operational status of the bridge, available
                for regular inspections or emergency audits.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Customizable Alerts</h4>
              <p className="text-gray-700">
                Tailor the alert thresholds and reporting schedules based on bridge-specific parameters or operator preferences, ensuring
                flexibility in monitoring requirements.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Automated Reporting & Alerts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-2xl font-bold text-blue-700 mb-3">Increased Safety</h4>
              <p className="text-gray-700">
                Instant alerts allow operators to respond rapidly to structural issues, preventing further damage and ensuring the
                safety of the bridge users.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Reduced Downtime</h4>
              <p className="text-gray-700">
                Automated reports and alerts ensure that bridge operators are immediately notified about potential issues, reducing
                unplanned maintenance or downtime.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Efficiency and Cost Savings</h4>
              <p className="text-gray-700">
                By automating the reporting and alert systems, operational efficiency is improved, leading to cost savings in both
                monitoring and repairs.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Success Stories with Automated Reporting & Alerts
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover how automated reporting and alerts have helped bridge operators improve efficiency and safety.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Bridge in Urban Area</h4>
              <p className="text-gray-700">
                With our automated reporting system, operators were able to identify minor stress-related anomalies early, preventing
                major disruptions and ensuring continuous safe use of the bridge.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Coastal Bridge Monitoring</h4>
              <p className="text-gray-700">
                The system provided detailed, real-time reports and alerts regarding weather-induced strain, enabling maintenance
                teams to take timely action before structural damage occurred.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Mountain Bridge Safety</h4>
              <p className="text-gray-700">
                Automated alerts for potential seismic activity enabled preemptive safety measures for this high-altitude bridge,
                ensuring minimal risk to commuters.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedReportingAlerts;
