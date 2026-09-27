import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E293B] text-white pt-16 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-[#1E293B] flex items-center justify-center font-bold text-lg shadow-sm">
                DS
              </div>
              <span className="font-heading font-extrabold text-xl text-white tracking-tight">
                DR. A. SRINIVASAN
              </span>
            </div>

            <p className="text-xs text-slate-200 uppercase tracking-wider font-semibold">
              Senior Social Worker • Counselor • Gender Specialist
            </p>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              "{PROFILE_DATA.tagline}"
            </p>

            <p className="text-xs text-slate-300">
              Two decades of dedicated advocacy, child protection, women's empowerment, and community development across Tamil Nadu.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase text-amber-300 tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li><a href="#hero" className="hover:text-amber-300 transition-colors">Home / Overview</a></li>
              <li><a href="#about" className="hover:text-amber-300 transition-colors">About Dr. Srinivasan</a></li>
              <li><a href="#social-work" className="hover:text-amber-300 transition-colors">Areas of Social Work</a></li>
              <li><a href="#projects" className="hover:text-amber-300 transition-colors">Featured Projects</a></li>
              <li><a href="#timeline" className="hover:text-amber-300 transition-colors">Journey & Milestones</a></li>
              <li><a href="#experience" className="hover:text-amber-300 transition-colors">Professional Experience</a></li>
              <li><a href="#education" className="hover:text-amber-300 transition-colors">Academic Qualifications</a></li>
            </ul>
          </div>

          {/* Service Domains */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase text-amber-300 tracking-wider">
              Core Domains
            </h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>Child Protection</li>
              <li>Child Labour Eradication</li>
              <li>Prevention of Child Marriage</li>
              <li>Women's Empowerment</li>
              <li>Gender Equality</li>
              <li>Counseling Support</li>
              <li>Labour Laws & Welfare</li>
            </ul>
          </div>

          {/* Contact Summary */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-heading uppercase text-amber-300 tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-200">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{PROFILE_DATA.contact.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-300 shrink-0" />
                <span>{PROFILE_DATA.contact.email}</span>
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                <span>{PROFILE_DATA.contact.address}, {PROFILE_DATA.contact.location}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-300">
          <p>© {currentYear} Dr. A. Srinivasan. All rights reserved.</p>
          <p className="text-[11px] text-slate-400">
            Social Impact & Community Development Portfolio
          </p>
        </div>

      </div>
    </footer>
  );
};
