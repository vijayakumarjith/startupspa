import React from 'react';
import { motion } from 'framer-motion';

const AuthPage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-xl"></div>
        <div className="relative rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20 p-6 sm:p-8">
          <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-6">
            Under Maintenance
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            "JARVIS is currently upgrading the system. Please stand by..."
          </p>
          <div className="mb-6">
            <iframe
              src="https://www.youtube.com/embed/606RfUUgzx4?autoplay=1&loop=1&playlist=606RfUUgzx4"
              title="Tony Stark Vibes"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-64 sm:h-96 rounded-lg"
            ></iframe>
          </div>
          <div className="flex justify-center">
            <img
              src="https://c.tenor.com/Wv9sYavZUNgAAAAd/tenor.gif"
              alt="Tony Stark Gif"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg"
            />
          </div>
          <p className="text-gray-400 text-sm mt-6">
            "Sometimes you gotta run before you can walk." - Tony Stark
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
