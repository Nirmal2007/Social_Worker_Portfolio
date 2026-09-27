import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Users, GraduationCap, HeartHandshake, ArrowRight, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-[#0F172A] min-h-[90vh] flex items-center">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_bg.jpeg"
          alt="Dr. A. Srinivasan Field Work"
          className="w-full h-full object-cover object-center opacity-40"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/90 via-[#0F172A]/50 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              20+ YEARS OF SOCIAL SERVICE & ADVOCACY
            </div>

            {/* Name Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-tight mb-4 drop-shadow-lg">
              DR. A. SRINIVASAN
            </h1>

            {/* Professional Titles */}
            <p className="text-lg sm:text-2xl font-medium text-[#60A5FA] mb-8 flex flex-wrap items-center gap-3 drop-shadow-md">
              <span>Senior Social Worker</span>
              <span className="text-[#F59E0B]">•</span>
              <span>Counselor</span>
              <span className="text-[#F59E0B]">•</span>
              <span>Gender Specialist</span>
            </p>

            {/* Quote Banner */}
            <blockquote className="border-l-4 border-[#F59E0B] pl-5 py-2 italic font-serif text-xl sm:text-2xl text-gray-200 mb-8 drop-shadow-md">
              "{PROFILE_DATA.tagline}"
            </blockquote>

            {/* Description Text */}
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl font-light">
              {PROFILE_DATA.summary}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-5 w-full sm:w-auto mb-12">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-[#0F172A] bg-[#F59E0B] hover:bg-[#FCD34D] shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transition-all duration-300 gap-2 group"
              >
                Explore My Work
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 gap-2"
              >
                <HeartHandshake className="w-5 h-5 text-[#60A5FA]" />
                Get in Touch
              </a>
            </div>

            {/* Highlight Badges Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/20 w-full">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <span className="text-sm font-semibold text-gray-200">Child Protection</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Users className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <span className="text-sm font-semibold text-gray-200">Women's Safety</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <GraduationCap className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <span className="text-sm font-semibold text-gray-200">PhD Social Welfare</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm">
                  <Award className="w-5 h-5 text-[#F59E0B]" />
                </div>
                <span className="text-sm font-semibold text-gray-200">20+ Yrs Fieldwork</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
