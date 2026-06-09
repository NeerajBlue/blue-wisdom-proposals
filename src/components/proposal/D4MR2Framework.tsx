"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Target, Rocket, Activity, RefreshCw } from 'lucide-react';

const steps = [
  { id: '1', title: 'Diagnose', desc: 'Establish baseline metrics on silos and engagement.', icon: Search, color: 'text-blue-500' },
  { id: '2', title: 'Define', desc: 'Co-create a customized OD Charter.', icon: PenTool, color: 'text-indigo-500' },
  { id: '3', title: 'Determine', desc: 'Prioritize interventions through an actionable blueprint.', icon: Target, color: 'text-purple-500' },
  { id: '4', title: 'Deploy', desc: 'Roll out phased implementations.', icon: Rocket, color: 'text-red-500' },
  { id: '5', title: 'Measure', desc: 'Track ROI via quarterly Balanced Scorecard reviews.', icon: Activity, color: 'text-orange-500' },
  { id: '6', title: 'Review & Repeat', desc: 'Execute adaptive refinements to ensure a sustainable culture.', icon: RefreshCw, color: 'text-green-500' },
];

export default function D4MR2Framework() {
  return (
    <div className="my-20 bg-white p-10 rounded-2xl shadow-xl border border-slate-100">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-slate-900">The Engine of Transformation</h2>
        <p className="text-lg text-slate-500 mt-2">Our Proprietary D4MR² Methodology</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all relative overflow-hidden"
            >
              <div className="absolute -right-4 -top-4 opacity-5">
                <Icon size={120} />
              </div>
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mr-4 ${step.color}`}>
                  <Icon size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Phase {step.id}</span>
                  <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
