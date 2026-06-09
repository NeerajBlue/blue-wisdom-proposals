"use client";

import React from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { title: "Financial Growth", value: "+20%", subtitle: "CAGR" },
  { title: "Cultural Health", value: "+45%", subtitle: "Engagement" },
  { title: "Talent Retention", value: "-35%", subtitle: "Attrition" },
  { title: "Operational Output", value: "+30%", subtitle: "Productivity" },
  { title: "Market Impact", value: "+28%", subtitle: "CLV / NPS" },
  { title: "Total Value", value: "700%", subtitle: "ROI" },
];

export default function ProjectedImpact() {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-2">Projected Business Impact & Hard Metrics</h2>
      <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">By systematically dismantling silos and empowering leadership, Blue Wisdom targets the following outcomes over 24 months:</p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md border-b-4 border-yellow-600 text-center"
          >
            <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-3">{metric.title}</h4>
            <div className="text-4xl font-extrabold text-yellow-600 mb-1">{metric.value}</div>
            <div className="text-xl font-medium text-yellow-700">{metric.subtitle}</div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-8 bg-slate-100 p-4 rounded-lg text-center text-sm text-slate-600 italic">
        *Innovation Add-On: Integration of AI-driven tools for real-time engagement tracking, delivering +15% faster insights.
      </div>
    </div>
  );
}
