import { useEffect, useState } from "react";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsMenuOpen, setIsSolutionsMenuOpen] = useState(false);
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTOScroll = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const solutions = [
    { name: "Structural Health Monitoring", path: "/solutions/structural-health-monitoring" },
    { name: "Data-Driven Maintenance Insights", path: "/solutions/data-driven-maintenance-insights" },
    { name: "Structural Condition Forecast Modeling", path: "/solutions/real-time-capacity-tracking" },
    { name: "Damage Detection Modeling", path: "/solutions/damage-detection-modeling" }
  ];

  const services = [
    { name: "Real-Time Monitoring", path: "/services/real-time-monitoring" },
    { name: "Predictive Maintenance Analytics", path: "/services/predictive-maintenance-analytics" },
    { name: "Risk & Security Assessment", path: "/services/risk-security-assessment" },
    { name: "IoT for Connectivity", path: "/services/iot-for-connectivity" },
    { name: "Automated Reporting & Alerts", path: "/services/automated-reporting-alerts" },
    { name: "Consulting & Optimization", path: "/services/consulting-optimization" },
  ];

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSolutions = () => {
    setIsSolutionsMenuOpen(!isSolutionsMenuOpen);
    setIsServicesMenuOpen(false);
  };

  const toggleServices = () => {
    setIsServicesMenuOpen(!isServicesMenuOpen);
    setIsSolutionsMenuOpen(false);
  };

  const handleDropdownMouseLeave = () => {
    setIsSolutionsMenuOpen(false);
    setIsServicesMenuOpen(false);
  };

  // Close mobile menu on link click
  const handleLinkClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`relative z-50 flex items-center justify-between px-6 py-4 shadow-md transition-all duration-300 ${isScrolled ? "bg-blue-700 shadow-lg" : "bg-gradient-to-r from-[#0064E1] to-[#3C3B6E]"
        } text-white`}
    >
      <div className="flex items-center space-x-3">
        <div className="h-11 w-11 font-bold ml-12">
          <svg viewBox="0 0 40 40" className="h-full w-full">
            <path d="M8 28 Q20 12 32 28" stroke="white" strokeWidth="2.5" fill="none" />
            <line x1="8" y1="28" x2="8" y2="32" stroke="white" strokeWidth="2.5" />
            <line x1="32" y1="28" x2="32" y2="32" stroke="white" strokeWidth="2.5" />
            <circle cx="20" cy="20" r="12" stroke="white" strokeWidth="1" fill="none" />
            <path d="M12 20 L16 20 M24 20 L28 20 M20 12 L20 16 M20 24 L20 28" stroke="white" strokeWidth="1" />
            <path d="M16 20 L18 20 L20 16 L22 24 L24 20 L26 20" stroke="white" strokeWidth="1" />
          </svg>
        </div>
        <div className="flex flex-col">
          <a href="/" className="text-2xl md:text-xl font-bold leading-tight">HealthAI</a>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <nav
        className={`${isMobileMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 p-4 md:p-0 transition-all duration-300`}
      >
        <a href="/" className="text-white hover:text-gray-200" onClick={handleLinkClick}>
          Home
        </a>
        <a href="/about" className="text-white hover:text-gray-200" onClick={handleLinkClick}>
          About
        </a>

        <div className="relative inline-block">
          <button
            onClick={toggleSolutions}
            className="flex items-center space-x-1 text-white hover:text-gray-200"
            aria-haspopup="true"
            aria-expanded={isSolutionsMenuOpen ? "true" : "false"}
          >
            <span>Solutions</span>
            <FiChevronDown />
          </button>
          {isSolutionsMenuOpen && (
            <div
              className="absolute mt-2 min-w-max bg-white text-gray-800 shadow-lg rounded-md"
              onMouseLeave={handleDropdownMouseLeave}
            >
              {solutions.map((solution, index) => (
                <a
                  key={index}
                  href={solution.path}
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                  onClick={handleLinkClick}
                >
                  {solution.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <div className="relative inline-block">
          <button
            onClick={toggleServices}
            className="flex items-center space-x-1 text-white hover:text-gray-200"
            aria-haspopup="true"
            aria-expanded={isServicesMenuOpen ? "true" : "false"}
          >
            <span>Services</span>
            <FiChevronDown />
          </button>
          {isServicesMenuOpen && (
            <div
              className="absolute mt-2 min-w-max bg-white text-gray-800 shadow-lg rounded-md"
              onMouseLeave={handleDropdownMouseLeave}
            >
              {services.map((service, index) => (
                <a
                  key={index}
                  href={service.path}
                  className="block px-4 py-2 hover:bg-gray-100 transition-colors duration-150"
                  onClick={handleLinkClick}
                >
                  {service.name}
                </a>
              ))}
            </div>
          )}
        </div>

        <button
          className="text-white hover:text-gray-200"
          onClick={() => {
            handleTOScroll("contact");
            handleLinkClick();
          }}
        >
          Contact us
        </button>
      </nav>

      <div className="hidden md:flex items-center space-x-6">
        <a href="/faqs" className="text-white hover:text-gray-200">
          FAQs
        </a>
        <a
          href="/login"
          className="px-4 py-2 text-sm font-semibold text-white bg-[#14ff64d9] rounded-lg hover:bg-indigo-700 transition duration-300 ease-in-out shadow-lg"
        >
          Login
        </a>
      </div>
    </header>
  );
};

export default Header;
