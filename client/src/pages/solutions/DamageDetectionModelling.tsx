import React from 'react';

const DamageDetectionModelling: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-blue-100 to-white-900 py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
                    Advanced Damage Detection Modeling for Structural Integrity
                </h2>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    {/* Image Section */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="/enhanced2.webp"
                            alt="Damage Detection Modeling"
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Text Section */}
                    <div className="md:w-1/2 text-center md:text-left">
                        <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                            AI-Powered Detection for Timely Maintenance
                        </h3>
                        <p className="text-xl text-gray-700 mb-6">
                            Our platform utilizes advanced AI algorithms and real-time sensor data to monitor bridges for structural damage, providing accurate, proactive insights. This early detection helps to identify potential issues before they escalate, reducing the risk of significant structural failures.
                        </p>
                        <p className="text-xl text-gray-700 mb-6">
                            With AI-driven analysis, we can assess environmental impacts, material fatigue, and stress factors, tailoring insights to each bridge’s unique conditions. This approach ensures that every maintenance action is informed, targeted, and effective, preserving bridge integrity for years to come.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className="mt-16 text-center">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-6">
                        Key Features of Damage Detection Modeling
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Anomaly Detection with Machine Learning</h4>
                            <p className="text-gray-700">
                                Leveraging historical data, machine learning models detect anomalies by identifying deviations from normal structural behavior. This approach catches minute, early-stage issues such as crack propagation and joint deterioration.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Comprehensive, Real-Time Monitoring</h4>
                            <p className="text-gray-700">
                                Continuous real-time monitoring allows the system to track fluctuations in load, temperature, and stress levels, providing an updated view of structural health and making early intervention possible when thresholds are met.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Predictive Modeling & Custom Alerts</h4>
                            <p className="text-gray-700">
                                Our predictive models forecast potential damage sites, sending alerts customized by priority, allowing maintenance teams to act immediately and with the right resources.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Tailored Reports and Analysis</h4>
                            <p className="text-gray-700">
                                Generate detailed reports, capturing metrics critical to understanding structural health. These reports help engineers make informed maintenance decisions based on reliable, data-backed insights.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Intuitive Visualizations</h4>
                            <p className="text-gray-700">
                                Easily interpret complex data through intuitive visualizations that map damage over time, highlight vulnerable areas, and show trends that guide preventive measures.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Benefits Section */}
                <div className="mt-16 bg-blue-50 py-12">
                    <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
                        Benefits of AI-Enhanced Damage Detection
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Increased Structural Safety</h4>
                            <p className="text-gray-700">
                                By detecting damage early, bridge operators can prevent structural failures, safeguarding public safety and minimizing downtime due to emergency repairs.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Optimized Maintenance Costs</h4>
                            <p className="text-gray-700">
                                With precise information on damage progression, maintenance resources are allocated effectively, reducing unnecessary costs and extending the bridge's lifespan.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Data-Driven Decision Making</h4>
                            <p className="text-gray-700">
                                Our data-driven approach enables engineers to make informed decisions, prioritize repairs, and strategically plan upgrades to maintain peak performance.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Case Studies Section */}
                <div className="mt-16">
                    <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
                        Real-World Impact: Case Studies
                    </h3>
                    <p className="text-lg text-gray-700 text-center mb-8">
                        Discover how our damage detection technology has helped bridge operators optimize maintenance strategies and improve structural resilience.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8">
                        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Urban Metro Bridge</h4>
                            <p className="text-gray-700">
                                Our system identified corrosion in load-bearing sections, allowing for targeted repairs that saved an estimated 30% in potential costs from delayed maintenance.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Coastal Highway Bridge</h4>
                            <p className="text-gray-700">
                                In a high-salt environment, real-time monitoring detected rust, prompting preventative maintenance that minimized structural damage and extended the bridge’s operational life.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-bold text-blue-700 mb-3">Mountainous Suspension Bridge</h4>
                            <p className="text-gray-700">
                                Continuous strain monitoring allowed for precise load balancing adjustments, mitigating risks associated with environmental stress from extreme winds and temperature shifts.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DamageDetectionModelling;
