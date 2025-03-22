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
        <div className="rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/30 to-yellow-600/30 blur-xl"></div>
          <div className="relative rounded-2xl backdrop-blur-xl bg-black/40 border border-red-500/20 p-6 sm:p-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-center gradient-text mb-6">
              🛠️ Under Maintenance 🛠️
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-lg text-gray-300 mb-6">
                "Jarvis, why is the authentication system down again? Oh right, I'm upgrading it to Mark 42. 
                Meanwhile, enjoy this loop of me working in the lab. And yes, that's a repulsor GIF below. 
                You're welcome."
              </p>

              <div className="mb-6">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/606RfUUgzx4?autoplay=1&loop=1&playlist=606RfUUgzx4"
                  title="Tony Stark Working"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://c.tenor.com/Wv9sYavZUNgAAAAd/tenor.gif"
                  alt="Tony Stark Repulsor"
                  className="rounded-lg"
                />
              </div>

              <p className="text-sm text-gray-400 mt-6">
                "Don't worry, I'm on it. Just like I was on that nuke in New York. Be back soon!"
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
