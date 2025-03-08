'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Business{' '}
              <span className="text-[#e31e24]">Vision</span> Into Reality
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Unlock your business potential with our innovative solutions. We help companies scale, optimize, and succeed in the digital age.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center px-6 py-3 bg-[#e31e24] text-white font-medium rounded-lg hover:bg-[#c91a1f] transition-colors">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-lg hover:border-[#e31e24] hover:text-[#e31e24] transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80"
              alt="Business team collaboration"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#e31e24]/10 to-transparent rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;