import React, { useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
  title?: string;
}

const Gallery = ({ images, title }: GalleryProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [currentX, setCurrentX] = useState(0);

  const springConfig = {
    stiffness: 150,
    damping: 20,
    mass: 0.5
  };

  const handlePrev = async () => {
    if (wrapperRef.current) {
      const newX = Math.min(currentX + 316, 0);
      setCurrentX(newX);
      controls.start({ x: newX, transition: { type: "spring", ...springConfig } });
    }
  };

  const handleNext = async () => {
    if (wrapperRef.current) {
      const maxScroll = -(wrapperRef.current.scrollWidth - wrapperRef.current.clientWidth);
      const newX = Math.max(currentX - 316, maxScroll);
      setCurrentX(newX);
      controls.start({ x: newX, transition: { type: "spring", ...springConfig } });
    }
  };

  const itemVariants = {
    initial: { 
      scale: 0.98,
      y: 0
    },
    hover: { 
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const buttonVariants = {
    initial: {
      backgroundColor: "rgba(255, 255, 255, 0.9)",
      color: "#000"
    },
    hover: {
      backgroundColor: "#FF4B76",
      color: "#fff",
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <section className="bg-[#FFF2E1] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>
        
        <div className="relative overflow-hidden p-4">
          <motion.button 
            onClick={handlePrev}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                     flex items-center justify-center shadow-md z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>
          
          <motion.button 
            onClick={handleNext}
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full
                     flex items-center justify-center shadow-md z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <motion.div 
            ref={wrapperRef}
            className="flex gap-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {images.map((image, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                initial="initial"
                whileHover="hover"
                className="flex-none w-[300px] h-[400px] relative overflow-hidden rounded-2xl shadow-lg"
              >
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  layoutId={`gallery-image-${index}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;