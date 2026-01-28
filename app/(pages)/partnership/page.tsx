'use client'

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';
import { 
  HiOutlineHandRaised, 
  HiOutlineChevronLeft, 
  HiOutlineBuildingOffice2, 
  HiOutlineArrowSmallRight,
  HiOutlineCheckCircle
} from 'react-icons/hi2';

/** * Strict Interfaces for Form Data 
 */
interface PartnershipFormData {
  name: string;
  organization: string;
  role: string;
  email: string;
  interest: 'strategic' | 'distribution' | 'technology' | 'education' | 'other' | '';
  message: string;
}

export default function PartnershipPage() {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<PartnershipFormData>({
    name: '',
    organization: '',
    role: '',
    email: '',
    interest: '',
    message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Logic for CRM/API integration goes here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-8">
            <HiOutlineCheckCircle size={40} />
          </div>
          <h1 className="text-3xl font-bold mb-4">Interest Received</h1>
          <p className="text-gray-600 dark:text-gray-200 mb-10">
            Thank you for reaching out. A member of our strategy team will review your proposal and respond within 2-3 business days.
          </p>
          <Link href="/" className="text-blue-600 font-bold flex items-center justify-center gap-2 hover:gap-3 transition-all">
            <HiOutlineChevronLeft /> Back to Zanari Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Side: Information & Branding */}
        <div className="p-8 md:p-16 lg:p-24 bg-gray-50 dark:bg-gray-900 flex flex-col justify-between">
          <div>
            <Link href="/invest" className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-blue-600 transition-colors mb-12 font-bold text-sm">
              <HiOutlineChevronLeft /> Invest in Zanari Capital
            </Link>
            <div className="mb-8 p-3 bg-blue-600 text-white w-fit rounded-2xl shadow-lg shadow-blue-600/20">
              <HiOutlineHandRaised size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Partner with <br />Zanari Capital.
            </h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-md">
              Tell us how you&apos;d like to work with Zanari. We are looking for mission-aligned collaborators to help scale financial access in Kenya.
            </p>
          </div>

          <div className="mt-12 space-y-6">
            <div className="flex items-start gap-4">
              <HiOutlineBuildingOffice2 className="text-blue-600 mt-1" size={24} />
              <div>
                <h4 className="font-bold text-sm">Institutional Integrity</h4>
                <p className="text-xs text-gray-500">We prioritize long-term compliance and structured growth over short-term speculation.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Partnership Form */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="max-w-md w-full mx-auto space-y-6">
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Full Name</label>
              <input 
                required
                type="text" 
                placeholder="Your Name"
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Organization</label>
                <input 
                  required
                  type="text" 
                  placeholder="Company Ltd"
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all text-sm"
                  value={formData.organization}
                  onChange={(e) => setFormData({...formData, organization: e.target.value})}
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Your Role</label>
                <input 
                  required
                  type="text" 
                  placeholder="e.g. Director"
                  className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all text-sm"
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Business Email</label>
              <input 
                required
                type="email" 
                placeholder="email@organization.com"
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Partnership Interest</label>
              <select 
                required
                title='interest'
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all appearance-none cursor-pointer"
                value={formData.interest}
                onChange={(e) => setFormData({...formData, interest: e.target.value as PartnershipFormData['interest']})}
              >
                <option value="" disabled>Select an option...</option>
                <option value="strategic">Strategic Partnership</option>
                <option value="distribution">Distribution / Ecosystem</option>
                <option value="technology">Technology / Infrastructure</option>
                <option value="education">Education / Content</option>
                <option value="other">Other Interest</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-200 ml-1">Optional Message</label>
              <textarea 
                rows={4}
                placeholder="Briefly describe how we can collaborate..."
                className="w-full p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-blue-600 outline-hidden transition-all resize-none text-sm"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-blue-700 transition-all flex items-center justify-center gap-2"
            >
              Submit Partnership Interest <HiOutlineArrowSmallRight size={20} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}