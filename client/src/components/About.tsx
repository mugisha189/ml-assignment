const BridgeFeatures = () => {
    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Cutting-Edge Technology */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            {/* Updated Icon */}
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L15 8H9L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 12L12 14L20 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 16L9 22L15 22L12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
                        <p className="text-gray-600">Our platform leverages the latest advancements in AI and sensor technology to monitor bridge health in real time, offering unmatched insight into structural integrity.</p>
                    </div>

                    {/* Enhanced Efficiency */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2C12 2 8 6 5 9L3 6L5 3L7 5L9 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 2L20 5L18 7L16 5L18 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Enhanced Efficiency</h3>
                        <p className="text-gray-600">Our solutions streamline bridge monitoring processes and enhance operational efficiency, helping to extend bridge lifespan and reduce maintenance costs.</p>
                    </div>

                    {/* Innovation Partnership */}
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6">
                            {/* Updated Icon */}
                            <svg className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                <path d="M12 16V2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 5L12 2L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M4 19L12 12L20 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-4">Innovation Partnership</h3>
                        <p className="text-gray-600">We collaborate with clients as partners, co-creating solutions that adapt to evolving site analysis and infrastructure management needs.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BridgeFeatures;
