'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
    <section className="py-16 bg-gradient-to-r from-gray-100 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Trusted by Leading Brands
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We have partnered with diverse brands across various industries to deliver
            exceptional digital experiences that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {displayedBrands.map((image, index) => (
            <div 
              key={index}
              className="group relative bg-white rounded-lg shadow-md border border-gray-100 p-3 flex items-center justify-center hover:shadow-xl transition-all duration-300 h-32 sm:h-40 overflow-hidden"
              style={{
                animation: `fadeIn 0.5s ease-in-out ${index * 0.1}s forwards`,
                opacity: 0,
              }}
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
            </div>
          ))}
        </div>
        
        {/* Mobile "View All" button */}
        {isMobile && !showAllBrands && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAllBrands(true)}
              className="inline-block px-6 py-2 bg-white border border-blue-500 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300"
            >
              View All Partners
            </button>
          </div>
        )}

        <div className="text-center flex justify-center gap-4 mt-14">
          <a 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 hover:shadow-lg"
          >
            Become Our Partner
          </a>
          <a 
            href="/contact/free-consultation" 
            className="inline-block px-8 py-3 bg-white border border-blue-600 text-blue-600 font-medium rounded-full hover:bg-blue-50 transition-colors duration-300 hover:shadow-lg"
          >
            Book a Free Consultation
          </a>
        </div>
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
