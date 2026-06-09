"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Target, AlertCircle, HelpCircle, CheckCircle2 } from 'lucide-react';

export default function ExecutiveSummary({ situation, complication, question, answer }: { situation: string, complication: string, question: string, answer: string }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      variants={containerVariants} 
      initial="hidden" 
      animate="visible"
      className="max-w-4xl mx-auto my-12"
    >
      <h2 className="text-3xl font-bold text-slate-900 mb-8 pb-2 border-b-2 border-red-600">Executive Summary</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Situation */}
        <motion.div variants={itemVariants} className="bg-slate-50 p-6 rounded-lg border-l-4 border-slate-400 shadow-sm">
          <div className="flex items-center mb-3">
            <Target className="w-6 h-6 text-slate-500 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">The Situation</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{situation}</p>
        </motion.div>

        {/* Complication */}
        <motion.div variants={itemVariants} className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 shadow-sm">
          <div className="flex items-center mb-3">
            <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">The Complication</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed">{complication}</p>
        </motion.div>

        {/* Question */}
        <motion.div variants={itemVariants} className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 shadow-sm">
          <div className="flex items-center mb-3">
            <HelpCircle className="w-6 h-6 text-orange-500 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">The Core Question</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed font-medium italic">"{question}"</p>
        </motion.div>

        {/* Answer (The Blue Wisdom Solution) */}
        <motion.div variants={itemVariants} className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600 shadow-sm">
          <div className="flex items-center mb-3">
            <CheckCircle2 className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">The Answer</h3>
          </div>
          <p className="text-slate-600 text-sm leading-relaxed font-medium">{answer}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
