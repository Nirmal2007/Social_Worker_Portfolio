import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface TrainingSectionProps {
  onInviteClick: () => void;
}

export const TrainingSection: React.FC<TrainingSectionProps> = ({ onInviteClick }) => {
  const trainingTopics = [
    {
      title: "Child Protection & Rights Safeguarding",
      audience: "Anganwadi Workers, Teachers, NGO Staff",
      desc: "Comprehensive modules on child rights, child labor prevention, early marriage intervention, and Child Welfare Committee procedures."
    },
    {
      title: "Gender Sensitization & Safety",
      audience: "Panchayat Leaders, SHG Federations, Youth",
      desc: "Interactive workshops exploring gender equity, prevention of domestic violence, and creating safe community environments."
    },
    {
      title: "Mental Health & Counseling Skills",
      audience: "Social Workers, Field Coordinators, Counselors",
      desc: "Practical techniques in adolescent guidance, trauma-informed psychological first aid, and family dispute resolution."
    },
    {
      title: "Labour Laws & Workplace Standards",
      audience: "Unorganized Sector Workers, Workplace Committees",
      desc: "Legal awareness regarding worker rights, decent labor practices, safety standards, and welfare entitlement schemes."
    },
    {
      title: "Community Resource Centre Management",
      audience: "Village Volunteers, Resource Persons",
      desc: "Training village resource teams to manage local information nodes, remedial learning centers, and scheme enrollment drives."
    },
    {
      title: "Government Scheme Enrollment Facilitation",
      audience: "Grassroots Volunteers, Community Leaders",
      desc: "Step-by-step guidance on identifying eligible beneficiaries and navigating government social protection portals."
    }
  ];

  return (
    <section id="training" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <GraduationCap className="w-4 h-4 text-[#F59E0B]" />
            Knowledge Sharing & Mentorship
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Training & Capacity Building
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Empowering institutional actors, Panchayat leaders, field teams, and community volunteers through structured training programs.
          </p>
        </div>

        {/* Training Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {trainingTopics.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#1E293B] text-amber-300 text-[11px] font-bold mb-2">
                  <Users className="w-3.5 h-3.5" />
                  Target Audience: {item.audience}
                </div>
                <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1E293B]/10 flex items-center gap-2 text-xs font-semibold text-[#2563EB]">
                <CheckCircle2 className="w-4 h-4 text-[#F59E0B]" />
                Interactive Field-Tested Curriculum
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Card Banner */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-r from-[#1E293B] to-[#2563EB] p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-extrabold font-heading text-amber-300">
              Invite Dr. Srinivasan for a Training / Workshop
            </h3>
            <p className="text-sm text-slate-100 max-w-xl">
              Available for capacity building sessions, institutional workshops, panel discussions, and guest lectures on child protection, gender equality, and social work practice.
            </p>
          </div>

          <button
            onClick={onInviteClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-[#1E293B] bg-amber-400 hover:bg-amber-300 transition-all shadow-md shrink-0"
          >
            Request Workshop Invitation
            <ArrowRight className="w-4 h-4 text-[#1E293B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
