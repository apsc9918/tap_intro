"use client";

import React, { useState } from 'react';
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";
import SubmitBtn from "./submit-btn";

export default function Survey() {
  const { ref } = useSectionInView("Survey");
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    appPreference: '',
    userType: '',
    rating: '',
    interest: '',
    suggestions: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `
      Name: ${formData.fullName}
      Platform Preference: ${formData.appPreference}
      User Type: ${formData.userType}
      Rating: ${formData.rating}/10
      Interest in Working: ${formData.interest}
      Suggestions: ${formData.suggestions}
    `;

    const formDataToSend = new FormData();
    formDataToSend.append('senderEmail', formData.email);
    formDataToSend.append('message', message);

    const { data, error } = await sendEmail(formDataToSend);

    if (error) {
      toast.error(error);
      return;
    }

    toast.success("Feedback submitted successfully!");
    setFormData({
      fullName: '',
      email: '',
      appPreference: '',
      userType: '',
      rating: '',
      interest: '',
      suggestions: ''
    });
  };

  return (
    <section
      id="survey"
      ref={ref}
      className="mb-12 scroll-mt-20 text-center sm:mb-12"
    >
      <SectionHeading>Help Shape Our Platform</SectionHeading>
      
      <motion.div
      
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 mx-auto max-w-[40rem]"
      >
        <div className="relative">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-2xl transform -rotate-1"></div>
          
          <form onSubmit={handleSubmit} 
            className="relative bg-white/70 backdrop-blur-sm dark:bg-gray-900/50 rounded-xl p-8 shadow-2xl border border-gray-200 dark:border-gray-800"
          >
            <div className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="fullName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-white/80 group-focus-within:text-blue-500 transition-colors">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                    required
                  />
                </div>
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-white/80 group-focus-within:text-blue-500 transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200"
                    required
                  />
                </div>
              </div>

              {/* Platform Preference */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80">
                  Which platform would you prefer to use?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {["Web Application", "Mobile Application", "Both"].map((option) => (
                    <label key={option} className="relative">
                      <input
                        type="radio"
                        name="appPreference"
                        value={option.toLowerCase()}
                        checked={formData.appPreference === option.toLowerCase()}
                        onChange={(e) => setFormData(prev => ({ ...prev, appPreference: e.target.value }))}
                        className="peer sr-only"
                        required
                      />
                      <div className="flex items-center justify-center px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:border-blue-500/50">
                        <span className="text-sm text-gray-700 dark:text-white/80">{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* User Type */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80">
                  How would you use our platform?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    ["talent", "As a Talent", "Join exciting startups and make an impact"],
                    ["startup", "As a Startup", "Find talented individuals for your team"]
                  ].map(([value, label, description]) => (
                    <label key={value} className="relative">
                      <input
                        type="radio"
                        name="userType"
                        value={value}
                        checked={formData.userType === value}
                        onChange={(e) => setFormData(prev => ({ ...prev, userType: e.target.value }))}
                        className="peer sr-only"
                        required
                      />
                      <div className="flex flex-col h-full p-4 rounded-lg border-2 border-gray-200 dark:border-gray-700 cursor-pointer transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:border-blue-500/50">
                        <span className="font-medium text-gray-900 dark:text-white">{label}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                  How much do you like this idea? (1-10)
                </label>
                <input
                  type="range"
                  id="rating"
                  min="1"
                  max="10"
                  value={formData.rating}
                  onChange={(e) => setFormData(prev => ({ ...prev, rating: e.target.value }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  required
                />
                <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
                  Selected: {formData.rating || '0'} / 10
                </div>
              </div>

              {/* Interest */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-gray-700 dark:text-white/80">
                  Are you interested in working with us?
                </label>
                <div className="flex flex-wrap justify-center gap-4">
                  {["Yes", "No", "Maybe"].map((option) => (
                    <label key={option} className="relative">
                      <input
                        type="radio"
                        name="interest"
                        value={option.toLowerCase()}
                        checked={formData.interest === option.toLowerCase()}
                        onChange={(e) => setFormData(prev => ({ ...prev, interest: e.target.value }))}
                        className="peer sr-only"
                        required
                      />
                      <div className="px-6 py-2 rounded-full border-2 border-gray-200 dark:border-gray-700 cursor-pointer transition-all peer-checked:border-blue-500 peer-checked:bg-blue-50 dark:peer-checked:bg-blue-900/20 hover:border-blue-500/50">
                        <span className="text-sm text-gray-700 dark:text-white/80">{option}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Suggestions */}
              <div className="space-y-3">
                <label htmlFor="suggestions" className="block text-sm font-medium text-gray-700 dark:text-white/80">
                  Do you have any suggestions for us?
                </label>
                <textarea
                  id="suggestions"
                  value={formData.suggestions}
                  onChange={(e) => setFormData(prev => ({ ...prev, suggestions: e.target.value }))}
                  className="w-full min-h-[120px] px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all duration-200 resize-none"
                  placeholder="Share your thoughts on features you'd like to see..."
                  required
                />
              </div>

              <div className="flex justify-center pt-4">
                <SubmitBtn />
              </div>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
}