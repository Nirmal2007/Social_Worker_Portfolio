import React from 'react';
import { X, Calendar, MapPin, Target, UserCheck, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import type { ProjectItem } from '../data/profileData';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#1E293B]/20 text-[#0F172A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-white/90 text-[#1E293B] hover:bg-[#1E293B] hover:text-white transition-colors shadow-md focus:outline-none"
          aria-label="Close project modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#1E293B]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] via-[#1E293B]/60 to-transparent" />
          
          {/* Title and Category Overlay */}
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="inline-block px-3 py-1 rounded-full bg-[#F59E0B] text-xs font-bold uppercase tracking-wider text-[#0F172A] mb-2">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading tracking-tight leading-tight">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Metadata Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#1E293B]/10 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#F59E0B]" />
              <span><strong>Period:</strong> {project.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
              <span><strong>Location:</strong> {project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[#F59E0B]" />
              <span><strong>Focus Area:</strong> {project.focusArea}</span>
            </div>
          </div>

          {/* Overview */}
          <div>
            <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-2 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
              Project Overview
            </h3>
            <p className="text-sm sm:text-base text-[#64748B] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Challenge & Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-[#EFF6FF]/50 border border-[#1E293B]/10">
              <h4 className="text-base font-bold text-[#1E293B] mb-2">The Challenge</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {project.challenge}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-[#FEF3C7]/50 border border-[#F59E0B]/20">
              <h4 className="text-base font-bold text-[#1E293B] mb-2">The Approach</h4>
              <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                {project.approach}
              </p>
            </div>
          </div>

          {/* Key Activities */}
          <div>
            <h3 className="text-lg font-bold font-heading text-[#1E293B] mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#2563EB]" />
              Key Activities & Interventions
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
              {project.activities.map((act, idx) => (
                <li key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] mt-1.5 shrink-0" />
                  <span className="text-[#0F172A] leading-relaxed">{act}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Role & Contribution */}
          <div className="p-5 rounded-2xl bg-[#1E293B] text-white">
            <h3 className="text-base font-bold font-heading text-amber-300 mb-2 flex items-center gap-2">
              <UserCheck className="w-5 h-5 text-amber-300" />
              Dr. Srinivasan's Role & Contribution
            </h3>
            <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
              {project.role}
            </p>
          </div>

          {/* Stakeholders */}
          <div>
            <h3 className="text-sm font-extrabold text-[#1E293B] uppercase tracking-wider mb-2 flex items-center gap-2">
              <Users className="w-4 h-4 text-[#F59E0B]" />
              Key Community & Institutional Stakeholders
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stakeholders.map((sh, idx) => (
                <span key={idx} className="px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-semibold">
                  {sh}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-6 border-t border-[#1E293B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full text-xs font-semibold text-[#64748B] hover:text-[#1E293B] hover:bg-[#F8FAFC] transition-colors"
            >
              Close Window
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors shadow-sm"
            >
              Inquire About Similar Initiatives
              <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
