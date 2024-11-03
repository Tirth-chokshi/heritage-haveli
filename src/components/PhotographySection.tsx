import React from 'react';
import { motion } from 'framer-motion';
import { photo1, photo2, photo3 } from '../assests';

const PhotographySection = () => {
  const photos = [
    { src: photo2, alt: "Wedding Photography 1" },
    { src: photo1, alt: "Wedding Photography 2" },
    { src: photo3, alt: "Wedding Photography 3" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const photoVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20
      }
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-white to-pink-50 overflow-hidden flex items-center">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-50/30 to-pink-100/20" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative z-10"
          >
            <motion.span 
              variants={textVariants}
              className="text-pink-600 font-medium mb-2 block"
            >
              Our Gallery
            </motion.span>
            <motion.h2 
              variants={textVariants}
              className="text-4xl lg:text-5xl font-bold mb-4 font-serif text-gray-900"
            >
              Capturing Your Perfect Moments
            </motion.h2>
            <motion.p 
              variants={textVariants}
              className="text-base lg:text-lg text-gray-600 mb-6 leading-relaxed"
            >
              Experience the art of storytelling through our lens. Our state-of-the-art facility 
              welcomes over 15,000 visitors, providing them with an immersive journey through 
              moments frozen in time. Each photograph tells a unique story, carefully crafted 
              to preserve your precious memories.
            </motion.p>
            <motion.div 
              variants={textVariants}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span className="text-gray-700">Professional Photography Services</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span className="text-gray-700">State-of-the-art Equipment</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-pink-500 rounded-full" />
                <span className="text-gray-700">Customized Photo Sessions</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo Grid Side */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="relative h-[450px] lg:h-[500px]"
          >
            <div className="relative w-full h-full">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  variants={photoVariants}
                  whileHover="hover"
                  className={`absolute w-60 lg:w-64 h-80 lg:h-[340px] rounded-2xl overflow-hidden shadow-xl
                    ${index === 0 ? 'top-0 right-0 z-30' : ''}
                    ${index === 1 ? 'bottom-0 right-12 z-20' : ''}
                    ${index === 2 ? 'top-12 right-24 z-10' : ''}`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </motion.div>
              ))}
              
              {/* Decorative Elements */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="absolute -right-16 -top-16 w-72 h-72 bg-pink-100/30 rounded-full blur-3xl"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute -right-8 -bottom-8 w-56 h-56 bg-pink-200/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PhotographySection;