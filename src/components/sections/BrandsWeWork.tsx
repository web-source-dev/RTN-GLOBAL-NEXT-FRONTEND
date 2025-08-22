'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
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

  // Split brands into two rows
  const firstRowBrands = displayedBrands.slice(0, Math.ceil(displayedBrands.length / 2));
  const secondRowBrands = displayedBrands.slice(Math.ceil(displayedBrands.length / 2));

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50 relative overflow-hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
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
                            We&apos;ve helped businesses of all sizes transform their digital presence with custom web development,
                stunning designs, and strategic solutions. Here are some of the companies we&apos;re proud to work with.
          </motion.p>
        </div>

        

        {/* Moving Logos - Two Rows */}
        <div className="relative overflow-hidden w-screen" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' }}>
          {/* First row - moving from right to left */}
          <motion.div 
            className="flex gap-6 md:gap-8 lg:gap-10 mb-8"
            animate={{ 
              x: [0, -1000],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          >
                         {/* First row brands */}
             {[...firstRowBrands, ...firstRowBrands].map((image, index) => (
               <motion.div 
                 key={`first-${index}`}
                 className="group relative bg-white rounded-lg shadow-md border border-gray-100 p-3 flex items-center justify-center hover:shadow-xl transition-all duration-300 h-32 sm:h-40 w-48 sm:w-56 flex-shrink-0 overflow-hidden"
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
          </motion.div>
          
          {/* Second row - moving from right to left (slightly different speed) */}
          <motion.div 
            className="flex gap-6 md:gap-8 lg:gap-10"
            animate={{ 
              x: [0, -1200],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          >
                         {/* Second row brands */}
             {[...secondRowBrands, ...secondRowBrands].map((image, index) => (
               <motion.div 
                 key={`second-${index}`}
                 className="group relative bg-white rounded-lg shadow-md border border-gray-100 p-3 flex items-center justify-center hover:shadow-xl transition-all duration-300 h-32 sm:h-40 w-48 sm:w-56 flex-shrink-0 overflow-hidden"
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
          </motion.div>
        </div>
        


                 {/* Enhanced CTA section - Full viewport width with prominent background */}
         <motion.div 
           className="mt-16 w-screen bg-gradient-to-r from-primary via-primary to-primary/90 p-8 md:p-12 lg:p-16"
           style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)' , marginTop: '8rem', marginBottom: '-4.5rem'}}
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.5 }}
         >
           <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white">Ready to Join Our Success Stories?</h3>
                <p className="text-white/90 mb-6 text-lg">
                  From startups to established brands, we help businesses achieve their digital goals through custom web development, design, and strategic solutions.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button className="gap-2 rounded-full bg-white text-primary text-md hover:bg-white/90 shadow-lg hover:shadow-xl transition-all duration-300">
                      Become Our Partner <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact/free-consultation">
                    <Button variant="outline" className="gap-2 rounded-full border-white text-white text-md hover:bg-white hover:text-primary transition-all duration-300">
                      Get Free Consultation
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm max-h-sm">
                  <div className="absolute -top-5 -left-5 w-20 h-20 rounded-full bg-white/30 opacity-60"></div>
                  <div className="absolute -bottom-5 -right-5 w-28 h-28 rounded-full bg-white/30 opacity-40"></div>
                  <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-500/20">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/20 text-white mb-4 mx-auto">
                      <Star className="w-6 h-6 fill-white" />
                    </div>
                    <h4 className="text-lg font-bold text-center text-lg mb-2 text-white">Industry Recognition</h4>
                    <p className="text-white/80 text-center text-md">
                      Our work has earned recognition from industry experts and awards for excellence in web development.
                    </p>
                  </div>
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
