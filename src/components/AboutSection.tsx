import React from 'react';
import { motion } from 'framer-motion';
import { UserCheck, Calendar, Globe, MapPin, Heart, Shield, BookOpen, Award } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <UserCheck className="w-4 h-4 text-[#F59E0B]" />
            Personal & Professional Profile
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            About Dr. A. Srinivasan
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Bridging academic research, field advocacy, institutional policy, and community mobilization to protect vulnerable populations across Tamil Nadu.
          </p>
        </div>

        {/* Two-Column About Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left Column Image & Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#1E293B]/10 bg-[#F8FAFC] group">
              <img
                src="/images/photo_110.jpg"
                alt="Dr. Srinivasan presenting an award"
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <p className="text-xs uppercase tracking-wider text-amber-300 font-semibold">Field Consultation & Outreach</p>
                <p className="text-sm font-medium">Grassroots interaction with rural community stakeholders</p>
              </div>
            </div>

            {/* Personal Details Snapshot Card */}
            <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 shadow-xs space-y-3">
              <h3 className="text-sm font-extrabold text-[#1E293B] uppercase tracking-wider mb-2 border-b border-[#1E293B]/10 pb-2">
                Personal & Contact Details
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <Calendar className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span><strong>DOB:</strong> 26.10.1981 (Age 43)</span>
                </div>
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <Globe className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span><strong>Nationality:</strong> Indian</span>
                </div>
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <MapPin className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span><strong>Location:</strong> Mathinipatti, Tamil Nadu</span>
                </div>
                <div className="flex items-center gap-2 text-[#0F172A]">
                  <Heart className="w-4 h-4 text-[#2563EB] shrink-0" />
                  <span><strong>Languages:</strong> Tamil, English</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column Detailed Narrative */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-5 text-[#0F172A]"
          >
            <h3 className="text-2xl font-bold font-heading text-[#1E293B]">
              A Legacy of Service, Advocacy & Grassroots Transformation
            </h3>

            <p className="text-base text-[#64748B] leading-relaxed">
              Dr. A. Srinivasan is a Senior Social Worker, Gender Specialist, and Counselor with over two decades of experience in community development, child protection, and social welfare advocacy. Throughout his career, he has worked extensively at the intersection of civil society, government bodies, and rural communities to safeguard human rights and promote social justice.
            </p>

            <p className="text-base text-[#64748B] leading-relaxed">
              From September 2015 to May 2025, Dr. Srinivasan served as Project Manager at Peace Trust, directing major initiatives including the APF Project and BAT Project. His leadership encompassed organizing Adolescent Girls & Boys Groups, Community Support Groups, and Self-Help Groups (SHGs) to eradicate child labor, prevent child marriage, curb child trafficking, and combat child sexual abuse.
            </p>

            <p className="text-base text-[#64748B] leading-relaxed">
              His academic journey matches his field dedication, holding a PhD in Social Welfare, Master of Social Work (MSW), Master of Arts in Political Science, Bachelor of Arts in Sociology, an Honorary Doctorate, and specialized diplomas in Labour Laws, Human Resource Management, Counseling Psychology, and Social Work.
            </p>

            {/* Core Values / Competencies List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PROFILE_DATA.coreSkills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-[#EFF6FF]/60 border border-[#1E293B]/10 text-xs sm:text-sm font-semibold text-[#1E293B]">
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1E293B] text-[#F59E0B] mx-auto flex items-center justify-center font-bold text-xl">
              20+
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1E293B]">Social Service Experience</h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Two decades of dedicated field practice, project management, and grassroots intervention across Tamil Nadu.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white mx-auto flex items-center justify-center font-bold text-xl">
              <Shield className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1E293B]">Child Protection</h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Eradication of child labor, prevention of child marriage, and establishment of Adolescent Protection Clubs.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#1E293B] text-white mx-auto flex items-center justify-center font-bold text-xl">
              <BookOpen className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1E293B]">Women's Empowerment</h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              Gender sensitization, Self-Help Group (SHG) mobilization, workplace safety, and legal rights advocacy.
            </p>
          </div>

          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#1E293B]/10 editorial-shadow-hover text-center space-y-3">
            <div className="w-12 h-12 rounded-xl bg-[#2563EB] text-white mx-auto flex items-center justify-center font-bold text-xl">
              <Award className="w-6 h-6 text-[#F59E0B]" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#1E293B]">Academic Rigor</h4>
            <p className="text-xs text-[#64748B] leading-relaxed">
              PhD in Social Welfare, MSW, Honorary Doctorate, MA Political Science, and multiple legal/HR diplomas.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
