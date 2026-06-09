"use client";

import React from 'react';
import { motion } from 'framer-motion';

const clients = [
  "Zydus Cadila", "Intas Pharma", "Reliance Industries", 
  "Adani Power", "Adani Gas", "Tata Power", 
  "Flipkart", "Amazon", "Maruti Suzuki", "Vodafone"
];

export default function ClientWall() {
  return (
    <div className="my-16 bg-slate-50 py-12 px-6 rounded-2xl shadow-inner border border-slate-200">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-8">Trusted By Industry Leaders</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
        {clients.map((client, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white px-6 py-3 rounded-full shadow-sm border border-slate-200 font-semibold text-slate-600 hover:text-blue-600 hover:border-blue-300 transition-colors cursor-default"
          >
            {client}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
