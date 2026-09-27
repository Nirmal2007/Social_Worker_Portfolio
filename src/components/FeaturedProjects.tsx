import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import type { ProjectItem } from '../data/profileData';

interface FeaturedProjectsProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Child Protection', 'Community Development', 'Youth Empowerment', "Women's Empowerment"];

  const filteredProjects = activeCategory === 'All'
    ? PROFILE_DATA.projects
    : PROFILE_DATA.projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <FolderKanban className="w-4 h-4 text-[#F59E0B]" />
            Field Interventions & Case Studies
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Featured Social Work Initiatives
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Documented social protection projects managed by Dr. Srinivasan across 20 years of field engagement.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1E293B] text-white shadow-md'
                  : 'bg-[#F8FAFC] text-[#0F172A] hover:bg-[#EFF6FF] hover:text-[#1E293B]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8FAFC] rounded-3xl border border-[#1E293B]/10 overflow-hidden editorial-shadow-hover flex flex-col justify-between group"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative h-60 w-full overflow-hidden bg-[#1E293B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/80 via-transparent to-transparent opacity-90" />
                  
                  {/* Category Pill Top Left */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#1E293B] text-xs font-bold shadow-xs">
                      {project.category}
                    </span>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-extrabold font-heading tracking-tight leading-tight group-hover:text-amber-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-4 text-xs text-[#64748B]">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#F59E0B]" />
                      <span>{project.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#F59E0B]" />
                      <span>{project.location}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                    {project.shortDescription}
                  </p>

                  <div className="p-3 rounded-xl bg-white border border-[#1E293B]/5 text-xs text-[#0F172A]">
                    <strong className="text-[#1E293B]">Role & Contribution:</strong> {project.role}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors shadow-xs group-hover:shadow"
                >
                  View Full Project Details
                  <ExternalLink className="w-4 h-4 text-[#F59E0B]" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
