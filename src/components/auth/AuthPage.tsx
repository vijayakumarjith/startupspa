import React from 'react';
import { motion } from 'framer-motion';

const MaintenancePage: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 to-yellow-900/50"></div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full h-full flex flex-col items-center justify-center text-center p-6"
      >
        {/* Header */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-4">
          🛠️ Under Maintenance 🛠️
        </h1>

        {/* Tony Stark Quote */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mb-8">
          "Jarvis, why is the authentication system down again? Oh right, I'm upgrading it to Mark 42. 
          Meanwhile, enjoy this loop of me working in the lab. And yes, that's a repulsor GIF below. 
          You're welcome."
        </p>

        {/* YouTube Video */}
        <div className="w-full max-w-4xl mb-8">
          <div className="relative aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/606RfUUgzx4?autoplay=1&loop=1&playlist=606RfUUgzx4"
              title="Tony Stark Working"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-2xl"
            ></iframe>
          </div>
        </div>

        {/* Repulsor GIF */}
        <div className="mb-8">
          <img
            src="https://c.tenor.com/Wv9sYavZUNgAAAAd/tenor.gif"
            alt="Tony Stark Repulsor"
            className="rounded-lg shadow-2xl"
          />
        </div>

        {/* Footer Message */}
        <p className="text-sm sm:text-base text-gray-400">
          "Don't worry, I'm on it. Just like I was on that nuke in New York. Be back soon!"
        </p>
      </motion.div>
    </div>
  );
};
export default AuthPage;
