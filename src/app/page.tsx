import React from 'react';
import ExecutiveSummary from '@/components/proposal/ExecutiveSummary';
import PyramidPrinciple from '@/components/proposal/PyramidPrinciple';
import Timeline from '@/components/proposal/Timeline';
import PricingTiers from '@/components/proposal/PricingTiers';
import ClientWall from '@/components/proposal/ClientWall';
import NeerajProfile from '@/components/proposal/NeerajProfile';

export default function ProposalPage() {
  const pillars = [
    { title: "First Time Managers", description: "Foundational skills for transitioning from individual contributor to team manager." },
    { title: "Team Compass", description: "Aligning team goals with organizational objectives and fostering trust." },
    { title: "Performance Matrix", description: "Structured frameworks to measure, evaluate, and enhance team performance." }
  ];

  const timelineEvents = [
    { day: "Day 0", title: "Diagnostics & Alignment", description: "Pre-assessments to deeply understand current managerial challenges and baseline metrics." },
    { day: "Day 1-2", title: "Foundation Workshop", description: "Immersive learning on core leadership skills, utilizing case studies and interactive roleplay." },
    { day: "Day 45", title: "Reinforcement & Application", description: "Follow-up sessions to review on-the-job application, address hurdles, and solidify new habits." }
  ];

  const pricingTiers = [
    {
      name: "Standard",
      description: "Perfect for foundational alignment.",
      price: "₹1,40,000",
      features: [
        "2 Days Foundation Workshop",
        "Up to 40 Participants",
        "Standard Course Materials",
      ]
    },
    {
      name: "Recommended",
      description: "Includes critical reinforcement.",
      price: "₹2,10,000",
      recommended: true,
      features: [
        "2 Days Foundation Workshop",
        "Day 45 Reinforcement Session",
        "Up to 40 Participants",
        "Manager Enablement Toolkit",
      ]
    },
    {
      name: "Enterprise",
      description: "Full behavioral transformation.",
      price: "₹3,50,000",
      features: [
        "Pre-Program Diagnostics",
        "2 Days Foundation Workshop",
        "Day 45 & Day 90 Reinforcement",
        "1-on-1 Leadership Coaching (5 pax)"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Header */}
      <header className="bg-slate-900 text-white py-24 px-6 text-center">
        <h1 className="text-5xl font-extrabold mb-4">Managerial Excellence</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">"Empowering Leaders for Strategic Growth"</p>
        <div className="mt-8 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">Prepared for: York IE</span>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-6xl">
        <ExecutiveSummary 
          situation="York IE's Global Capability Centre in Ahmedabad is scaling rapidly, growing to over 150 employees. This rapid expansion creates a demand for unified, highly effective leadership at the frontline."
          complication="As individual contributors transition into 'first-time managers', they lack formal frameworks to optimize workflows, delegate effectively, and manage performance under constraint."
          question="How do we equip these emerging leaders with the behavioral tools to drive performance and team synergy without burning out?"
          answer="A structured 2-level 'Managerial Excellence' intervention that leverages the 10:20:70 methodology to ensure immediate on-the-job application and sustainable habit building."
        />

        <PyramidPrinciple 
          coreRecommendation="Implement a Cohort-Based Leadership Journey"
          pillars={pillars}
        />

        <Timeline events={timelineEvents} />
        
        <PricingTiers tiers={pricingTiers} />
        
        <NeerajProfile />
        
        <ClientWall />
      </div>
    </main>
  );
}
