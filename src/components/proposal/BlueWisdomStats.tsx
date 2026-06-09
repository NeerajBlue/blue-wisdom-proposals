"use client";

import React from 'react';
import { motion } from 'framer-motion';

export default function BlueWisdomStats() {
  return (
    <div className="my-16 py-12 border-y border-slate-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-slate-900">Blue Wisdom: Architecting Sustainable Excellence</h2>
        <p className="text-lg text-slate-500 mt-2 max-w-3xl mx-auto">
          Blue Wisdom Organizational Development (BW OD) brings 28+ years of expertise in turning operational friction into a sustainable competitive advantage.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-4"
        >
          <div className="text-5xl font-serif text-yellow-600 mb-2">28+</div>
          <div className="text-3xl font-serif text-yellow-600 mb-4">Years</div>
          <p className="text-slate-600 text-sm">Transformed 100+ organizations across industries.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="p-4"
        >
          <div className="text-5xl font-serif text-yellow-600 mb-2">100+</div>
          <div className="text-3xl font-serif text-yellow-600 mb-4">Organizations</div>
          <p className="text-slate-600 text-sm">Utilizing FMCG-specific frameworks including 4C Profiles, the Performance Matrix, and the Balanced Scorecard.</p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="p-4"
        >
          <div className="text-5xl font-serif text-yellow-600 mb-2">500-700%</div>
          <div className="text-3xl font-serif text-yellow-600 mb-4">ROI</div>
          <p className="text-slate-600 text-sm">Consistently delivering exponential returns within 24 months.</p>
        </motion.div>
      </div>
    </div>
  );
}
