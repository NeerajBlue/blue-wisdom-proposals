import React from 'react';
import Image from 'next/image';
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
    "title": "Stakeholder Alignment",
    "description": "In-depth 1-on-1 interviews with Deans and HODs to understand vision and academic expectations."
  },
  {
    "title": "Competency Audits",
    "description": "Deploying 360-degree feedback and psychometric assessments to identify behavioral and technical gaps among staff and faculty."
  },
  {
    "title": "Blueprint Creation",
    "description": "Designing a data-driven, highly focused Training Calendar and Budget aligned strictly to the diagnosed needs."
  }
];
  const timelineEvents = [
  {
    "day": "Week 1",
    "title": "Leadership Diagnostics",
    "description": "Alignment meetings with University Leadership to map the ideal 'Design & Architecture' competency model."
  },
  {
    "day": "Week 2-3",
    "title": "Assessment Deployment",
    "description": "Rolling out surveys and focus group discussions across departments."
  },
  {
    "day": "Week 4",
    "title": "The Blueprint Presentation",
    "description": "Presenting the final TNI Report and a recommended, highly-targeted training calendar for approval."
  }
];
  const pricingTiers = [
  {
    "name": "Diagnostic Phase",
    "description": "Full TNI and Blueprint Delivery.",
    "price": "₹2,50,000",
    "recommended": true,
    "features": [
      "Leadership Interviews",
      "Faculty Assessments",
      "Final TNI Report",
      "Custom Training Calendar Design"
    ]
  },
  {
    "name": "Diagnostic + Pilot",
    "description": "Includes one pilot training module.",
    "price": "₹3,75,000",
    "features": [
      "Full Diagnostic Phase",
      "1-Day Pilot Workshop based on findings",
      "Impact Assessment"
    ]
  }
];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Header */}
      <header className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="mb-8 flex justify-center items-center gap-8">
          <Image src="/blue_wisdom_logo.png" alt="Blue Wisdom" width={200} height={96} className="h-24 object-contain bg-white p-2 rounded shadow" />
          
          <div className="text-3xl text-slate-400">×</div>
          <Image src="/anu-logo.png" alt="Anant National University" width={200} height={96} className="h-24 object-contain bg-white p-2 rounded shadow" />
          
        </div>
        <h1 className="text-5xl font-extrabold mb-4">Architecting Academic Excellence</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">"A Strategic Training Needs Identification & Competency Mapping Initiative"</p>
        <div className="mt-8 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">Prepared for: Anant National University</span>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-6xl">
        <BlueWisdomStats />

        <ExecutiveSummary 
          situation="Anant National University stands at the forefront of Design and Architecture education. To maintain academic and operational preeminence, the university requires faculty and staff who are not only subject matter experts but also aligned with unique industry expectations."
          complication="Applying a standard, pre-packaged training calendar risks missing the nuanced, highly specific developmental needs of a design-centric institution, potentially leading to misaligned budgets and low ROI."
          question="How can we precisely diagnose the unique competency gaps across faculty and staff to ensure any future training investments are highly focused and immediately impactful?"
          answer="Phase 1: A Comprehensive Training Needs Identification (TNI) and Competency Mapping exercise utilizing Blue Wisdom's diagnostic tools to architect a bespoke developmental roadmap."
        />

        <D4MR2Framework />

        <PyramidPrinciple 
          coreRecommendation="Execute a Comprehensive TNI & Competency Mapping Phase"
          pillars={pillars}
        />

        <Timeline events={timelineEvents} />
        
        <ProjectedImpact />
        
        <PricingTiers tiers={pricingTiers} />

        {/* Dynamic Logistics Checklist */}
        
        
        <NeerajProfile />
        
        <ClientWall />
      </div>
    </main>
  );
}