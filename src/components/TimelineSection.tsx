import React from 'react';
import { motion } from 'framer-motion';
import { History, GraduationCap, Briefcase, Award, Sparkles } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const TimelineSection: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'Education':
        return <GraduationCap className="w-5 h-5 text-white" />;
      case 'Experience':
        return <Briefcase className="w-5 h-5 text-white" />;
      case 'Recognition':
        return <Award className="w-5 h-5 text-white" />;
      default:
        return <Sparkles className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="timeline" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <History className="w-4 h-4 text-[#F59E0B]" />
            Chronological Impact
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Journey of Service & Milestones
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Key professional appointments, academic achievements, and project leadership milestones strictly documented from field experience.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[#1E293B]/20 transform -translate-x-1/2" />

          <div className="space-y-12">
            {PROFILE_DATA.timeline.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Badge Node */}
                  <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 z-10 w-10 h-10 rounded-full bg-[#1E293B] border-4 border-[#F8FAFC] flex items-center justify-center shadow-md">
                    {getIcon(item.type)}
                  </div>

                  {/* Content Card */}
                  <div className={`ml-12 sm:ml-0 sm:w-1/2 ${isEven ? 'sm:pr-12' : 'sm:pl-12'} w-full`}>
                    <div className="bg-white p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold">
                          {item.year}
                        </span>
                        <span className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wider">
                          {item.type}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold font-heading text-[#1E293B]">
                        {item.title}
                      </h3>

                      <p className="text-xs font-semibold text-[#F59E0B]">
                        {item.organization}
                      </p>

                      <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed pt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
