import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export const RolesSection: React.FC = () => {
  const roles = [
    {
      title: "Project Manager",
      organization: "Peace Trust",
      period: "Sep 2015 – May 2025",
      type: "Executive Leadership",
      desc: "Managed APF & BAT Projects on child protection, community development, resource centres, and adolescent empowerment."
    },
    {
      title: "Senior Social Worker & Field Advocate",
      organization: "Community & Civil Society Networks",
      period: "20+ Years Continuous Service",
      type: "Field Practice",
      desc: "Direct field outreach, family support, child labor rescue coordination, and social scheme linking."
    },
    {
      title: "Counselor & Psychological Support Provider",
      organization: "ICS Madurai Specialization",
      period: "Active Practice",
      type: "Counseling Practice",
      desc: "Providing guidance for adolescents, trauma counseling, family conflict resolution, and mental health support."
    },
    {
      title: "Gender Specialist & Resource Person",
      organization: "District & Regional Forums",
      period: "Active Designation",
      type: "State/Regional Resource",
      desc: "Facilitating gender sensitization, workplace safety awareness, and women's self-help group capacity building."
    },
    {
      title: "Child Protection Committee Mobilizer",
      organization: "Grassroots Vigilance Networks",
      period: "2015 – Present",
      type: "Community Coordinator",
      desc: "Coordinating with Panchayat leaders, Anganwadi workers, schools, and Child Welfare Committees."
    },
    {
      title: "Labour Rights & Welfare Consultant",
      organization: "Unorganized Sector Groups",
      period: "Active Engagement",
      type: "Legal Rights Advocate",
      desc: "Applying Diploma in Labour Laws expertise to defend worker entitlements and promote fair workplace practices."
    }
  ];

  return (
    <section id="roles" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4 text-[#F59E0B]" />
            Official Responsibilities & Designations
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Professional Roles & Community Responsibilities
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Verified leadership roles across project management, counseling, gender advocacy, and child welfare coordination.
          </p>
        </div>

        {/* Roles Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-2.5 py-1 rounded-md bg-[#1E293B] text-amber-300 text-[11px] font-bold">
                    {item.type}
                  </span>
                  <span className="text-xs font-semibold text-[#2563EB]">
                    {item.period}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-1">
                  {item.title}
                </h3>

                <p className="text-xs font-semibold text-[#F59E0B] mb-3">
                  {item.organization}
                </p>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E293B]/10 text-[11px] font-semibold text-[#1E293B]">
                Verified Designation
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
