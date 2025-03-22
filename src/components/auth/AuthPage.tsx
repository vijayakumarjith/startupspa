import React from 'react';
import { motion } from 'framer-motion';

const AuthPage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="relative w-full max-w-2xl text-center"
      >
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-600/30 blur-2xl rounded-3xl"></div>

        {/* Content Container */}
        <div className="relative rounded-2xl backdrop-blur-xl bg-black/40 border border-purple-500/20 p-6 sm:p-8">
          {/* Header */}
          <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
            Under Maintenance
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg mb-6">
            "JARVIS is currently upgrading the system. Please stand by..."
          </p>

          {/* YouTube Embed */}
          <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/606RfUUgzx4?autoplay=1&loop=1&playlist=606RfUUgzx4"
              title="Tony Stark Vibes"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-64 sm:h-96"
            ></iframe>
          </div>

          {/* Loading Spinner */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          </div>

          {/* Tony Stark GIF */}
          <div className="flex justify-center mb-6">
            <img
              src="https://c.tenor.com/Wv9sYavZUNgAAAAd/tenor.gif"
              alt="Tony Stark Gif"
              className="w-48 h-48 sm:w-64 sm:h-64 rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>

          {/* Quote */}
          <p className="text-gray-400 text-sm mt-6">
            "Sometimes you gotta run before you can walk." - Tony Stark
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
