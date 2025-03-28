import React from 'react';
import { motion } from 'framer-motion';

const Application: React.FC = () => {
    const handleTOScroll = (sectionId: string) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            className="flex flex-col items-center justify-center p-8"
            id='bridge-ai-platform'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <motion.h1
                className="text-2xl text-center text-blue-600 font-bold"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Looking for more information on bridge analysis?
            </motion.h1>

            <motion.p
                className="mb-6 text-gray-600 mx-6 my-6 max-w-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                Struggling to understand how our AI platform can optimize your bridge management operations? We're here to help! At Bridge AI, we understand that managing infrastructure can be challenging, but our advanced AI-powered platform provides real-time insights, predictive maintenance, and data-driven analytics to ensure the safety and longevity of your bridges. Whether you're looking to integrate the system into your existing operations or need guidance on its features, our support team is ready to assist. Reach out to us today, and let’s discuss how we can enhance your bridge management strategy.
            </motion.p>

            <motion.button
                className="bg-blue-600 flex mx-auto justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 m-6 rounded"
                whileHover={{ scale: 1.1, backgroundColor: "#2563EB" }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                onClick={() => handleTOScroll("contact")}
            >
                Ready to talk about optimizing bridge management?
            </motion.button>
        </motion.div>
    );
};

export default Application;
