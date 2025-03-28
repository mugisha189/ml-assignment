import React from 'react';
import { motion } from 'framer-motion';
import { FaCloud, FaDesktop, FaShieldAlt, FaRobot, FaPenNib, FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Array of services with descriptions tailored to bridge site analysis and links to respective pages
const services = [
    {
        title: 'Real-Time Structural Monitoring',
        description: 'Our AI platform provides real-time monitoring of bridge structures, allowing for immediate detection of stress, wear, and other risks. Ensure bridge integrity and safety with instant updates.',
        icon: <FaCloud />,
        link: '/services/real-time-monitoring',
    },
    {
        title: 'Data Analytics for Predictive Maintenance',
        description: 'Utilize AI-driven analytics to forecast maintenance needs. Our platform offers insights into structural behavior, enabling proactive upkeep to extend bridge lifespan.',
        icon: <FaDesktop />,
        link: '/services/predictive-maintenance-analytics',
    },
    {
        title: 'Advanced Security and Risk Assessment',
        description: 'Our system prioritizes security by monitoring for structural vulnerabilities and potential hazards, helping teams respond before issues arise.',
        icon: <FaShieldAlt />,
        link: '/services/risk-security-assessment',
    },
    {
        title: 'IoT Integration for Enhanced Connectivity',
        description: 'Integrate IoT sensors for real-time data collection across bridge components. Achieve comprehensive oversight and improve response time to dynamic changes.',
        icon: <FaRobot />,
        link: '/services/iot-for-connectivity',
    },
    {
        title: 'Automated Reporting and Alerts',
        description: 'Receive automated alerts on structural health, weather impact, and load variations. Keep stakeholders informed with instant notifications for optimal decision-making.',
        icon: <FaPenNib />,
        link: '/services/automated-reporting-alerts',
    },
    {
        title: 'Consulting and Structural Optimization',
        description: 'Our consulting services offer in-depth structural analysis and optimization strategies. We provide expert recommendations tailored to improve bridge safety and efficiency.',
        icon: <FaBriefcase />,
        link: '/services/consulting-optimization',
    },
];

// Variants for motion animations
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface ServiceSectionProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
}

// ServiceSection component that displays each service with animation and navigation link
const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, icon, link }) => {
    return (
        <motion.div
            className="bg-white rounded-lg shadow-md p-6 border-t-2 flex flex-col justify-between h-full"
            id="service"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
        >
            <motion.div
                className="flex items-center mb-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <motion.div
                    className="bg-blue-500 text-white p-3 rounded-full mr-4"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                >
                    {icon}
                </motion.div>
                <motion.h3
                    className="text-xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    {title}
                </motion.h3>
            </motion.div>
            <motion.p
                className="text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
            >
                {description}
            </motion.p>
            <Link to={link}>
                <motion.button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    Learn more
                </motion.button>
            </Link>
        </motion.div>
    );
};

const ServiceList: React.FC = () => {
    return (
        <>
            <head>
                <title>Our Services</title>
            </head>

            {/* Header section */}
            <motion.h1
                className="text-3xl text-blue-600 font-bold my-8 text-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                Our Services
            </motion.h1>

            <motion.p
                className="text-black text-xl mb-8 text-center"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
            >
                AI-powered solutions for bridge site analysis, enhancing structural safety, efficiency, and longevity.
            </motion.p>

            {/* Services Grid */}
            <motion.div
                className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                    }
                }}
            >
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="h-full"
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.3 }
                        }}
                    >
                        <ServiceSection
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            link={service.link}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </>
    );
};

export default ServiceList;
