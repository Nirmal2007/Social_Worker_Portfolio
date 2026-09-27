import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Award, Users, BookOpen } from 'lucide-react';

export const ImpactStats: React.FC = () => {
  const stats = [
    {
      number: "20+",
      label: "Years of Social Service",
      subtext: "Continuous fieldwork, advocacy, and community empowerment since 2005",
      icon: <Award className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      number: "10",
      label: "Years Project Leadership",
      subtext: "Project Manager at Peace Trust directing APF & BAT Projects (2015–2025)",
      icon: <Shield className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      number: "9",
      label: "Degrees & Diplomas",
      subtext: "PhD in Social Welfare, MSW, Honorary Doctorate, MA, BA & specialized law diplomas",
      icon: <BookOpen className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      number: "4",
      label: "Core Community Pillars",
      subtext: "Adolescent Clubs, Women SHGs, Panchayat Committees & Anganwadi Networks",
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />
    }
  ];

  return (
    <section id="impact" className="py-16 bg-[#1E293B] text-white relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 mx-auto flex items-center justify-center">
                {stat.icon}
              </div>

              <p className="text-4xl sm:text-5xl font-extrabold font-heading text-amber-300">
                {stat.number}
              </p>

              <h3 className="text-lg font-bold font-heading text-white">
                {stat.label}
              </h3>

              <p className="text-xs text-slate-200 leading-relaxed">
                {stat.subtext}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
