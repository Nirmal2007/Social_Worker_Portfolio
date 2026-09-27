import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  UserX, 
  HeartHandshake, 
  Users, 
  Scale, 
  HeartPulse, 
  Briefcase, 
  Building2, 
  Sparkles, 
  FileCheck, 
  GraduationCap, 
  Network 
} from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

const iconMap: Record<string, React.ReactNode> = {
  Shield: <Shield className="w-6 h-6 text-[#F59E0B]" />,
  UserX: <UserX className="w-6 h-6 text-[#F59E0B]" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-[#F59E0B]" />,
  Users: <Users className="w-6 h-6 text-[#F59E0B]" />,
  Scale: <Scale className="w-6 h-6 text-[#F59E0B]" />,
  HeartPulse: <HeartPulse className="w-6 h-6 text-[#F59E0B]" />,
  Briefcase: <Briefcase className="w-6 h-6 text-[#F59E0B]" />,
  Building2: <Building2 className="w-6 h-6 text-[#F59E0B]" />,
  Sparkles: <Sparkles className="w-6 h-6 text-[#F59E0B]" />,
  FileCheck: <FileCheck className="w-6 h-6 text-[#F59E0B]" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-[#F59E0B]" />,
  Network: <Network className="w-6 h-6 text-[#F59E0B]" />
};

export const SocialWorkAreas: React.FC = () => {
  return (
    <section id="social-work" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <Shield className="w-4 h-4 text-[#F59E0B]" />
            Core Domains of Service
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Areas of Social Work & Advocacy
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Specialized areas of intervention, protection, legal awareness, and community capacity building developed through 20+ years of field leadership.
          </p>
        </div>

        {/* 12 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROFILE_DATA.socialWorkAreas.map((area, index) => (
            <motion.div
              key={area.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white p-7 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover flex flex-col justify-between group"
            >
              <div>
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-xl bg-[#1E293B] flex items-center justify-center mb-5 group-hover:bg-[#2563EB] transition-colors shadow-xs">
                  {iconMap[area.iconName] || <Shield className="w-6 h-6 text-[#F59E0B]" />}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-3 group-hover:text-[#2563EB] transition-colors">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                  {area.description}
                </p>
              </div>

              {/* Key Aspects Pills */}
              <div className="pt-4 border-t border-[#1E293B]/10 flex flex-wrap gap-1.5">
                {area.keyAspects.map((aspect, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#1E293B] text-[11px] font-semibold"
                  >
                    {aspect}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
