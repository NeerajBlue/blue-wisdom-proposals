const fs = require('fs');
const path = require('path');

// 1. Read the config file
const configPath = path.join(__dirname, '../proposal-config.json');
if (!fs.existsSync(configPath)) {
  console.error("Error: proposal-config.json not found.");
  process.exit(1);
}

const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// 2. Determine paths
const slug = config.clientName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
const proposalDir = path.join(__dirname, '../src/app/proposals', slug);

if (!fs.existsSync(proposalDir)) {
  fs.mkdirSync(proposalDir, { recursive: true });
}

// 3. Select Checklist based on Intervention Type
let checklistHtml = '';
if (config.interventionType === 'Classroom') {
  checklistHtml = `
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-10 rounded-r-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Classroom Logistics Checklist</h3>
          <ul className="list-disc ml-5 space-y-2 text-slate-700">
            <li>U-Shape Seating Arrangement</li>
            <li>Projector and Screen</li>
            <li>Flipcharts with markers</li>
            <li>Collar Mic (if over 30 participants)</li>
          </ul>
        </div>
  `;
} else if (config.interventionType === 'OBT') {
  checklistHtml = `
        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-10 rounded-r-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Outbound Training (OBT) Checklist</h3>
          <ul className="list-disc ml-5 space-y-2 text-slate-700">
            <li>Outdoor venue confirmation</li>
            <li>Safety gear and first aid kit</li>
            <li>Props for team building activities</li>
            <li>Casual/Sports attire communication to participants</li>
          </ul>
        </div>
  `;
} else if (config.interventionType === 'Online') {
  checklistHtml = `
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6 my-10 rounded-r-lg">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Online Intervention Checklist</h3>
          <ul className="list-disc ml-5 space-y-2 text-slate-700">
            <li>Zoom/Teams link generated and tested</li>
            <li>Breakout room assignments pre-configured</li>
            <li>Mural/Miro boards ready</li>
            <li>Technical dry run scheduled</li>
          </ul>
        </div>
  `;
}

// 4. Generate the Next.js page content based on config
const pageContent = `
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
  const pillars = ${JSON.stringify(config.pillars, null, 2)};
  const timelineEvents = ${JSON.stringify(config.timelineEvents, null, 2)};
  const pricingTiers = ${JSON.stringify(config.pricingTiers, null, 2)};

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Hero Header */}
      <header className="bg-slate-900 text-white py-24 px-6 text-center">
        <div className="mb-8 flex justify-center items-center gap-8">
          <img src="/blue_wisdom_logo.png" alt="Blue Wisdom" className="h-24 object-contain bg-white p-2 rounded shadow" />
          ${config.clientLogo ? `
          <div className="text-3xl text-slate-400">×</div>
          <img src="${config.clientLogo}" alt="${config.clientName}" className="h-24 object-contain bg-white p-2 rounded shadow" />
          ` : ''}
        </div>
        <h1 className="text-5xl font-extrabold mb-4">${config.title}</h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto italic">"${config.subtitle}"</p>
        <div className="mt-8 inline-block bg-white/10 px-6 py-2 rounded-full border border-white/20">
          <span className="text-sm font-semibold tracking-wider uppercase text-blue-200">Prepared for: ${config.clientName}</span>
        </div>
      </header>

      <div className="container mx-auto px-6 max-w-6xl">
        <BlueWisdomStats />

        <ExecutiveSummary 
          situation="${config.executiveSummary.situation}"
          complication="${config.executiveSummary.complication}"
          question="${config.executiveSummary.question}"
          answer="${config.executiveSummary.answer}"
        />

        <D4MR2Framework />

        <PyramidPrinciple 
          coreRecommendation="${config.coreRecommendation}"
          pillars={pillars}
        />

        <Timeline events={timelineEvents} />
        
        <ProjectedImpact />
        
        <PricingTiers tiers={pricingTiers} />

        {/* Dynamic Logistics Checklist */}
        ${checklistHtml}
        
        <NeerajProfile />
        
        <ClientWall />
      </div>
    </main>
  );
}
`;

fs.writeFileSync(path.join(proposalDir, 'page.tsx'), pageContent.trim());
console.log(`Success! Generated proposal for ${config.clientName} at /proposals/${slug}`);
