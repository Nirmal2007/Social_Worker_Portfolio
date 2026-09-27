import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, CheckCircle2, Bookmark } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
            Academic Credentials & Specializations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Education & Academic Background
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Verified academic qualifications reflecting a lifelong dedication to social welfare, labor laws, sociology, political science, and counseling.
          </p>
        </div>

        {/* Academic Degrees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PROFILE_DATA.academics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="bg-white p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2.5 py-1 rounded-md text-[11px] font-bold ${
                    item.category === 'Doctorate' 
                      ? 'bg-[#1E293B] text-amber-300'
                      : item.category === 'Master'
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-[#EFF6FF] text-[#1E293B]'
                  }`}>
                    {item.category}
                  </span>
                  <span className="text-xs font-semibold text-[#F59E0B]">
                    {item.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-2">
                  {item.degree}
                </h3>

                <p className="text-xs text-[#64748B] leading-relaxed">
                  {item.institution}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E293B]/10 flex items-center gap-1.5 text-[11px] font-semibold text-[#2563EB]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                Documented Credential
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Focus Highlight Banner */}
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl border border-[#1E293B]/15 editorial-shadow space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold uppercase tracking-wider">
            <Bookmark className="w-4 h-4 text-[#F59E0B]" />
            Academic Research Focus
          </div>
          <h3 className="text-2xl font-bold font-heading text-[#1E293B]">
            Research on Child Labour Eradication & Prevention of Child Marriage
          </h3>
          <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
            Dr. Srinivasan’s research integrates field data collected over 20 years with socio-legal frameworks. His doctoral and master's level research emphasizes how community support groups, adolescent clubs, and Anganwadi coordination create scalable mechanisms for child welfare in rural districts.
          </p>
        </div>

      </div>
    </section>
  );
};
