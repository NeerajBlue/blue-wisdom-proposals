"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export type Tier = {
  name: string;
  description: string;
  price: string;
  recommended?: boolean;
  features: string[];
};

export default function PricingTiers({ tiers }: { tiers: Tier[] }) {
  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Commercial Investment</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {tiers.map((tier, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 }}
            className={`rounded-2xl shadow-xl overflow-hidden bg-white ${tier.recommended ? 'ring-2 ring-blue-600 md:-mt-8 md:mb-8 z-10 relative' : 'border border-slate-200 opacity-90'}`}
          >
            {tier.recommended && <div className="bg-blue-600 text-white text-center text-sm font-bold py-2 uppercase tracking-wider">Most Recommended</div>}
            <div className="bg-slate-50 p-8 text-center border-b border-slate-200">
              <h3 className="text-2xl font-bold text-slate-800">{tier.name}</h3>
              <p className="text-slate-500 text-sm mt-2 h-10">{tier.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-extrabold text-slate-900">{tier.price}</span>
                <span className="text-slate-500"> + GST</span>
              </div>
            </div>
            <div className="p-8">
              <ul className="space-y-4">
                {tier.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                    <span className="text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
