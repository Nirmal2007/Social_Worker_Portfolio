import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ShieldCheck, Building, Users2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const ExperienceSection: React.FC = () => {
  const exp = PROFILE_DATA.experiences[0];

  return (
    <section id="experience" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <Briefcase className="w-4 h-4 text-[#F59E0B]" />
            Verified Career Track
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Project leadership and community management records documenting two decades of dedicated service.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="max-w-4xl mx-auto bg-[#F8FAFC] rounded-3xl border border-[#1E293B]/15 p-6 sm:p-10 editorial-shadow space-y-8">
          
          {/* Header Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#1E293B]/10">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2563EB] mb-1">
                <Building className="w-4 h-4 text-[#F59E0B]" />
                {exp.organization}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1E293B]">
                {exp.role}
              </h3>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-start md:items-end gap-2 text-xs text-[#64748B]">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-[#1E293B]/10 font-bold text-[#1E293B]">
                <Calendar className="w-4 h-4 text-[#F59E0B]" />
                {exp.period}
              </div>
              <div className="inline-flex items-center gap-1.5 text-xs text-[#64748B]">
                <MapPin className="w-3.5 h-3.5 text-[#2563EB]" />
                {exp.location}
              </div>
            </div>
          </div>

          {/* Key Achievements & Responsibilities List */}
          <div className="space-y-4">
            <h4 className="text-base font-bold font-heading text-[#1E293B] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#F59E0B]" />
              Core Responsibilities & Direct Outcomes
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {exp.highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-5 rounded-2xl border border-[#1E293B]/5 flex items-start gap-4 shadow-xs"
                >
                  <div className="w-8 h-8 rounded-full bg-[#EFF6FF] text-[#1E293B] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-xs sm:text-sm text-[#0F172A] leading-relaxed">
                    {highlight}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Institutional Coordination Badges */}
          <div className="pt-4 border-t border-[#1E293B]/10">
            <p className="text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-3 flex items-center gap-2">
              <Users2 className="w-4 h-4 text-[#F59E0B]" />
              Coordinated Institutional Partners
            </p>
            <div className="flex flex-wrap gap-2">
              {['Government Welfare Bodies', 'Panchayat Leaders', 'Schools & Teachers', 'Anganwadi Workers', 'Child Welfare Committees (CWC)', 'Self-Help Groups (SHG)', 'Adolescent Clubs'].map((partner, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white border border-[#1E293B]/10 text-xs font-semibold text-[#1E293B]">
                  {partner}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
