
const RiskSecurityAssessment = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Risk & Security Assessment for Bridge Infrastructure
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service6.jpg"
              alt="Risk & Security Assessment"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Comprehensive Risk and Security Analysis for Bridge Safety
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Our Risk & Security Assessment service provides a comprehensive evaluation of bridge infrastructure to identify potential risks and vulnerabilities. Using AI-powered tools, IoT sensors, and real-time monitoring, we assess the security of the bridge against natural disasters, environmental factors, structural degradation, and other potential hazards.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              The service includes a thorough evaluation of existing bridge conditions, an analysis of external threats (like seismic activity, weather conditions, and traffic loads), and predictive insights into future risks. This proactive assessment allows for the early identification of weaknesses, preventing costly failures and improving overall safety.
            </p>

          </div>
        </div>

        {/* Key Features Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Features of Risk & Security Assessment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">AI-Powered Risk Detection</h4>
              <p className="text-gray-700">
                Our AI algorithms analyze sensor data to predict potential risks based on structural conditions, external factors, and historical data.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Comprehensive Threat Assessment</h4>
              <p className="text-gray-700">
                We evaluate various threats, including environmental factors, natural disasters, and human factors, to assess their impact on bridge security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Real-Time Monitoring Integration</h4>
              <p className="text-gray-700">
                Continuous data from IoT sensors is used to monitor and assess bridge conditions in real time, providing up-to-date insights into risk factors.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Risk & Security Assessment for Bridge Operators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Preventative Maintenance</h4>
              <p className="text-gray-700">
                Early detection of risks allows bridge operators to take preventive measures, reducing the likelihood of accidents or catastrophic failures.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Enhanced Security</h4>
              <p className="text-gray-700">
                Proactive identification of security threats ensures that the bridge is protected against potential risks, including environmental disasters and terrorism.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Cost Savings</h4>
              <p className="text-gray-700">
                By identifying risks early, operators can take corrective actions that reduce the need for expensive repairs or emergency responses.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Case Studies in Risk & Security Assessment
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover how our Risk & Security Assessment service has helped bridge operators across the globe to assess and mitigate risks, ensuring long-term safety and security.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Seismic Risk Assessment in Earthquake-Prone Areas</h4>
              <p className="text-gray-700">
                A bridge located in a seismic zone underwent a risk assessment to identify potential vulnerabilities in the event of an earthquake. The results helped reinforce critical components to ensure safety.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Flood Risk Assessment for Coastal Bridges</h4>
              <p className="text-gray-700">
                A coastal bridge was assessed for flood risks, and improvements were made to protect against rising water levels, ensuring its long-term functionality despite extreme weather.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Terrorism Threat Analysis for High-Traffic Bridges</h4>
              <p className="text-gray-700">
                Risk and security assessments identified vulnerabilities in a high-traffic bridge, enabling the implementation of protective measures to safeguard against terrorism and sabotage.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiskSecurityAssessment;
