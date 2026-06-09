import React from 'react';
import ExecutiveSummary from '@/components/proposal/ExecutiveSummary';
import PyramidPrinciple from '@/components/proposal/PyramidPrinciple';
import Timeline from '@/components/proposal/Timeline';
import PricingTiers from '@/components/proposal/PricingTiers';
import ClientWall from '@/components/proposal/ClientWall';
import NeerajProfile from '@/components/proposal/NeerajProfile';
import D4MR2Framework from '@/components/proposal/D4MR2Framework';
import ProjectedImpact from '@/components/proposal/ProjectedImpact';
import BlueWisdomStats from '@/components/proposal/BlueWisdomStats';

export default function ProposalPage() {
  const pillars = [
  {
    "title": "Self-Leadership",
    "description": "Understanding personal triggers and building resilience."
  },
  {
    "title": "Leading Teams",
    "description": "Fostering psychological safety and agile collaboration."
  },
  {
    "title": "Driving Change",
    "description": "Executing strategy through rapid experimentation."
  }
];
  const timelineEvents = [
  {
    "day": "Day 1",
    "title": "Foundation & Mindset",
    "description": "Breaking down silos and understanding the 'Why' behind change."
  },
  {
    "day": "Day 2",
    "title": "Tools & Application",
    "description": "Simulation exercises and creating a 30-day action plan."
  }
];
  const pricingTiers = [
  {
    "name": "Standard",
    "description": "Foundational alignment.",
    "price": "₹1,40,000",
    "features": [
      "2 Days Workshop",
      "Standard Materials"
    ]
  },
  {
    "name": "Recommended",
    "description": "Includes critical reinforcement.",
    "price": "₹2,10,000",
    "recommended": true,
    "features": [
      "2 Days Workshop",
      "Day 45 Follow-up",
      "Manager Toolkit"
    ]
  }
];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Header */}
      <header className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Leadership Evolution</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">"Transforming Managers into Visionaries"</p>
        <div className="mt-8 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">Prepared for: Acme Corp</span>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-6xl">
        <BlueWisdomStats />

        <ExecutiveSummary 
          situation="Acme Corp is undergoing a major digital transformation."
          complication="Mid-level managers are resisting the change due to lack of agile leadership skills."
          question="How can we equip leaders to drive change rather than resist it?"
          answer="A 2-day immersive change leadership workshop utilizing the 10:20:70 methodology."
        />

        <D4MR2Framework />

        <PyramidPrinciple 
          coreRecommendation="Implement the Agile Leadership Pathway"
          pillars={pillars}
        />

        <Timeline events={timelineEvents} />
        
        <ProjectedImpact />
        
        <PricingTiers tiers={pricingTiers} />

        {/* Dynamic Logistics Checklist */}
        
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-10 rounded-r-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Classroom Logistics Checklist</h3>
          <ul className="list-disc ml-5 space-y-2 text-slate-700">
            <li>U-Shape Seating Arrangement</li>
            <li>Projector and Screen</li>
            <li>Flipcharts with markers</li>
            <li>Collar Mic (if over 30 participants)</li>
          </ul>
        </div>
  
        
        <NeerajProfile />
        
        <ClientWall />
      </div>
    </main>
  );
}