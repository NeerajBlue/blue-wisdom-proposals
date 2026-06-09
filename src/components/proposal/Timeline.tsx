"use client";

import React from 'react';
import { motion } from 'framer-motion';

export type TimelineEvent = {
  day: string;
  title: string;
  description: string;
};

export default function Timeline({ events }: { events: TimelineEvent[] }) {
  return (
    <div className="max-w-3xl mx-auto my-16">
      <h2 className="text-3xl font-bold text-slate-900 mb-10 border-b-2 border-red-600 pb-2">The Learning Journey</h2>
      <div className="relative border-l-4 border-blue-200 ml-6">
        {events.map((event, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-10 ml-8 relative"
          >
            {/* Dot */}
            <div className="absolute -left-[42px] top-1 h-6 w-6 rounded-full bg-white border-4 border-blue-600 shadow-sm"></div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">{event.day}</span>
              <h3 className="text-xl font-bold text-slate-800 mt-1 mb-2">{event.title}</h3>
              <p className="text-slate-600 leading-relaxed">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
