"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function PyramidPrinciple({ coreRecommendation, pillars }: { coreRecommendation: string, pillars: { title: string, description: string }[] }) {
  return (
    <div className="max-w-4xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">The Core Recommendation</h2>
      
      <div className="flex flex-col items-center">
        {/* Top of Pyramid */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-lg shadow-xl w-3/4 text-center z-10 relative"
        >
          <h3 className="text-xl font-bold">{coreRecommendation}</h3>
        </motion.div>
        
        {/* Connectors */}
        <div className="flex w-3/4 justify-around -mt-2 z-0 relative">
          <div className="w-1 h-10 bg-blue-200"></div>
          <div className="w-1 h-10 bg-blue-200"></div>
          <div className="w-1 h-10 bg-blue-200"></div>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + (index * 0.1) }}
              className="bg-white border-t-4 border-blue-600 p-6 shadow-lg rounded-b-xl"
            >
              <h4 className="font-bold text-blue-900 mb-3 text-lg">{pillar.title}</h4>
              <p className="text-sm text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
