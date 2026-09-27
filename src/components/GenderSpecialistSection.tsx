import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Users, ShieldAlert, Heart, BookOpen, CheckCircle } from 'lucide-react';

export const GenderSpecialistSection: React.FC = () => {
  const genderCards = [
    {
      title: "Women's Empowerment & SHGs",
      description: "Mobilizing self-help groups, building economic self-reliance, and integrating social safety training into micro-finance networks.",
      icon: <Users className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Gender Sensitization Workshops",
      description: "Designing and facilitating state and district-level workshops for Panchayat leaders, youth, and institutional stakeholders.",
      icon: <Scale className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Workplace & Legal Safety",
      description: "Applying Diploma in Labour Laws expertise to ensure gender safety, fair working conditions, and harassment-free workplaces.",
      icon: <ShieldAlert className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Adolescent Protection Networks",
      description: "Establishing safe clubs for adolescent girls to discuss bodily autonomy, legal rights, and prevention of early marriage.",
      icon: <Heart className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Community Safety Campaigns",
      description: "Conducting village-level awareness campaigns on domestic violence, gender equality, and family welfare schemes.",
      icon: <BookOpen className="w-6 h-6 text-[#F59E0B]" />
    },
    {
      title: "Counseling & Psychological Support",
      description: "Providing individual and family counseling for survivors of domestic stress, gender discrimination, and social trauma.",
      icon: <CheckCircle className="w-6 h-6 text-[#F59E0B]" />
    }
  ];

  return (
    <section id="gender-women" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <Scale className="w-4 h-4 text-[#F59E0B]" />
            Gender Advocacy & Women's Protection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Gender Equality, Women's Safety & Empowerment
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Integrating gender equality, legal safeguards, and psychological counseling into community development frameworks.
          </p>
        </div>

        {/* Top Banner with Image & Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          
          <div className="lg:col-span-6 space-y-4 text-[#0F172A]">
            <span className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold uppercase tracking-wider">
              Specialist Practice
            </span>
            <h3 className="text-2xl font-bold font-heading text-[#1E293B]">
              Empowering Women & Safeguarding Gender Rights
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              Dr. Srinivasan’s work as a Gender Specialist combines academic rigor with practical community interventions. By partnering with Self-Help Groups (SHGs) and local Panchayat bodies, he has spearheaded initiatives that address gender-based violence, promote workplace safety, and champion equal opportunities for women and adolescent girls.
            </p>
            <div className="p-4 rounded-xl bg-white border border-[#1E293B]/10 text-xs sm:text-sm text-[#1E293B] font-semibold flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shrink-0" />
              Diploma in Counseling Psychology (ICS Madurai) & Diploma in Labour Laws (DLL)
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#1E293B]/10 bg-white">
              <img
                src="/images/photo_111.jpg"
                alt="Zero Tolerance for Sexual Harassment Campaign"
                className="w-full h-80 object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase font-bold text-amber-300">Gender Safety Campaign</p>
                <p className="text-sm">Zero Tolerance for Sexual Harassment & Violence Against Women</p>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {genderCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EFF6FF] flex items-center justify-center mb-2">
                {card.icon}
              </div>
              <h4 className="text-lg font-bold font-heading text-[#1E293B]">{card.title}</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
