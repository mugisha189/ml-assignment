
const ConsultingOptimization = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl text-blue-800 font-bold text-center mb-12">
          Consulting and Structural Optimization for Bridge Safety
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="/service2.jpg"
              alt="Consulting and Optimization"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Optimize Bridge Performance with Expert Consulting
            </h3>
            <p className="text-xl text-gray-700 mb-6">
              Our consulting services provide in-depth analysis and recommendations to enhance bridge safety and efficiency.
              Leveraging AI insights and structural expertise, we help bridge operators implement the best practices for
              long-term sustainability.
            </p>
            <p className="text-xl text-gray-700 mb-6">
              From load balancing to resilience strategies, our experts offer tailored solutions to address specific
              structural needs, ensuring safe and effective bridge operations.
            </p>
          </div>
        </div>

        {/* Key Services Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-blue-800 mb-6">
            Key Consulting and Optimization Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Load Distribution Analysis</h4>
              <p className="text-gray-700">
                Evaluate bridge load distribution to ensure optimal weight handling and structural longevity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Resilience Strategy Planning</h4>
              <p className="text-gray-700">
                Develop strategies for enhancing bridge resilience against extreme weather and unforeseen stressors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Life-Cycle Cost Optimization</h4>
              <p className="text-gray-700">
                Reduce long-term maintenance costs by implementing AI-driven life-cycle optimization models.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-blue-50 py-12">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Benefits of Structural Optimization Consulting
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Enhanced Safety</h4>
              <p className="text-gray-700">
                Improve safety with precise load and stress evaluations, minimizing risks and protecting bridge integrity.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Optimized Performance</h4>
              <p className="text-gray-700">
                Achieve higher efficiency and performance through optimized structural management.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Extended Bridge Life</h4>
              <p className="text-gray-700">
                Ensure a longer lifespan for bridge infrastructure by reducing wear through optimal maintenance.
              </p>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-blue-800 text-center mb-6">
            Success Stories from Our Consulting Services
          </h3>
          <p className="text-lg text-gray-700 text-center mb-8">
            Discover how our structural optimization consulting has transformed bridge operations worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Optimizing Load Bearing in Coastal Bridges</h4>
              <p className="text-gray-700">
                Our load analysis services helped a coastal bridge enhance its load handling, reducing stress on
                critical support structures and preventing premature wear.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Resilience Planning for Mountain Bridges</h4>
              <p className="text-gray-700">
                We assisted mountain bridge operators in creating a resilience plan to withstand heavy snowfall and
                extreme temperatures, ensuring reliable operations year-round.
              </p>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-blue-700 mb-3">Reducing Costs in Urban Bridge Networks</h4>
              <p className="text-gray-700">
                A metropolitan bridge network leveraged our cost optimization models to reduce maintenance expenses
                while extending bridge life and enhancing structural reliability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultingOptimization;
