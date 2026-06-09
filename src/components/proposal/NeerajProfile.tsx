"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Briefcase, Linkedin } from 'lucide-react';

export default function NeerajProfile() {
  return (
    <div className="max-w-5xl mx-auto my-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
      <div className="md:flex">
        <div className="md:w-1/3 bg-slate-100 p-8 flex flex-col items-center justify-center border-r border-slate-200">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
            {/* Fallback to a nice colored circle if photo not found, but we expect the user to put neeraj_photo.jpg in public */}
            <img src="/neeraj_photo.jpg" alt="Neeraj Bhardwaj" className="w-full h-full object-cover bg-blue-100" onError={(e) => { e.currentTarget.src = 'https://ui-avatars.com/api/?name=Neeraj+Bhardwaj&background=003366&color=fff&size=256' }} />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 text-center">Neeraj Bhardwaj</h3>
          <p className="text-blue-600 font-medium mb-4 text-center">Director, Blue Wisdom Pvt. Ltd.</p>
          <a href="#" className="flex items-center text-slate-500 hover:text-blue-600 transition-colors">
            <Linkedin className="w-5 h-5 mr-2" />
            <span className="text-sm font-semibold">Connect on LinkedIn</span>
          </a>
        </div>
        
        <div className="md:w-2/3 p-8">
          <h4 className="text-2xl font-bold text-slate-800 mb-4 border-b border-slate-200 pb-3">Professional Profile</h4>
          <p className="text-slate-600 leading-relaxed mb-8">
            A globally recognized L&D Consultant, Trainer, Coach, and Author with over 28 years of corporate work experience. Neeraj's extensive experience and expertise have gained him a global reputation that is highly regarded in the industry, specializing in driving behavioral shifts and performance excellence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start">
              <Award className="w-6 h-6 text-yellow-500 mr-3 shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-slate-800">Awards & Recognition</h5>
                <p className="text-sm text-slate-600 mt-1">Best Trainer by Assocham & Global HRD Award for Excellence in Training.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <BookOpen className="w-6 h-6 text-blue-500 mr-3 shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-slate-800">Academic Background</h5>
                <p className="text-sm text-slate-600 mt-1">MBA in HR and PGDSM. Distinguished visiting faculty at IIM, Nirma, MICA, and EDI.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <Briefcase className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" />
              <div>
                <h5 className="font-bold text-slate-800">Core Expertise</h5>
                <p className="text-sm text-slate-600 mt-1">Leadership Development, Service Excellence Under Constraint, Performance Management.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
