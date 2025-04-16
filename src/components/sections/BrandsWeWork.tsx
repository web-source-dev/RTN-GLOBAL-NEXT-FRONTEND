'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Trophy, ThumbsUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define featured brands (first 8 will be shown on mobile)
const brandImages = [
  'Harmony 4 All logo.avif',
  'Emilia_Romagna_In_Tour.avif',
  'flamingo_bay_tanning_and_beauty.avif',
  'maid_sparkling_clean.avif',
  'Troy_CRIB.jpg',
  'Lily_rose_signature_lashes.avif',
  'Nmga.png',
  'younger.jpg',
  'Alpha_crew.avif',
  'seed_exchange.avif',
  'AEPSIPECES.avif',
  'sicilia_in_tour.avif',
  'pallets_to_go.avif',
  'tourprism.png',
  'employ_me.avif',
  'Beauty_Bay.jpg',
  'Reachly.avif',
  'RNT1.jpg',
  'stabm.avif',
  'flexi_motour.png',
  'italia_in_tour.avif',
  'spectra.jpg',
  'handymen_directory.avif',
  'Go_by _Tesla.avif',
  'adequat.jpg',
];

// Stats for the counter section
const stats = [
  { value: 500, label: 'Happy Clients', icon: <ThumbsUp className="w-5 h-5" /> },
  { value: 1250, label: 'Projects Completed', icon: <Trophy className="w-5 h-5" /> },
  { value: 15, label: 'Awards Won', icon: <Star className="w-5 h-5" /> },
];

// Counter animation component
interface CounterProps {
  value: number;
  duration?: number;
}

const Counter = ({ value, duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  
  useEffect(() => {
    let start = 0;
    let timeoutId: NodeJS.Timeout | null = null;
    
    // If element is in view and count is not yet at value
    if (isInView && count < value) {
      // Calculate step based on value and duration
      const step = Math.ceil(value / (duration / 50));
      
      const updateCount = () => {
        start = Math.min(start + step, value);
        setCount(start);
        
        if (start < value) {
          timeoutId = setTimeout(updateCount, 50);
        }
      };
      
      updateCount();
    }
    
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [isInView, value, duration, count]);
  
  return <span ref={countRef}>{count.toLocaleString()}+</span>;
};

const BrandsWeWork = () => {
  const [showAllBrands, setShowAllBrands] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if we're on mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
      // On larger screens, always show all brands
      if (window.innerWidth >= 768) {
        setShowAllBrands(true);
      }
    };

    // Set initial value
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Determine which brands to display
  const displayedBrands = isMobile && !showAllBrands 
    ? brandImages.slice(0, 8) 
    : brandImages;

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Content container */}
      <div className="container mx-auto px-4">
        {/* Heading and intro */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-sm font-medium text-blue-600 mb-4"
          >
            Success Stories
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Brands That Trust Our Expertise
          </motion.h2>
          
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-lg text-gray-600 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We've helped businesses of all sizes transform their digital presence with custom web development, 
            stunning designs, and strategic solutions. Here are some of the companies we're proud to work with.
          </motion.p>
        </div>

        {/* Stats Counter Section */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md border border-gray-100 p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4">
                {stat.icon}
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                <Counter value={stat.value} duration={2500} />
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Logos Grid with improved animations */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {displayedBrands.map((image, index) => (
            <motion.div 
              key={index}
              className="group relative bg-white rounded-lg shadow-md border border-gray-100 p-3 flex items-center justify-center hover:shadow-xl transition-all duration-300 h-32 sm:h-40 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Fancy background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Subtle corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-md" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-blue-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-md" />
              
              <div className="relative w-full h-full flex items-center justify-center p-4 z-10">
                <Image
                  src={`/industry/${image}`}
                  alt={`Brand logo ${image.replace(/\.(avif|jpg|png)$/, '')}`}
                  fill
                  sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 20vw, 16vw"
                  style={{
                    objectFit: 'contain',
                    objectPosition: 'center',
                  }}
                  className="p-2 transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile "View All" button */}
        {isMobile && !showAllBrands && (
          <div className="text-center mt-8">
            <motion.button
              onClick={() => setShowAllBrands(true)}
              className="inline-block px-6 py-2 bg-white border border-blue-500 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              View All Partners
            </motion.button>
          </div>
        )}

        {/* Enhanced CTA section */}
        <motion.div 
          className="mt-16 bg-white p-8 rounded-xl shadow-md border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Ready to Join Our Success Stories?</h3>
              <p className="text-gray-600 mb-6">
                From startups to established brands, we help businesses achieve their digital goals through custom web development, design, and strategic solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="gap-2 rounded-full bg-blue-600 hover:bg-blue-700">
                    Become Our Partner <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact/free-consultation">
                  <Button variant="outline" className="gap-2 rounded-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Get Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-xs">
                <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-blue-100 opacity-60"></div>
                <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-blue-200 opacity-40"></div>
                <div className="relative z-10 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 mb-4 mx-auto">
                    <Star className="w-6 h-6 fill-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-center mb-2">Industry Recognition</h4>
                  <p className="text-gray-600 text-center text-sm">
                    Our work has earned recognition from industry experts and awards for excellence in web development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add CSS animation */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default BrandsWeWork;
