import { useState, useRef } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SocialWorkAreas } from './components/SocialWorkAreas';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectModal } from './components/ProjectModal';
import { TimelineSection } from './components/TimelineSection';
import { ExperienceSection } from './components/ExperienceSection';
import { GenderSpecialistSection } from './components/GenderSpecialistSection';
import { TrainingSection } from './components/TrainingSection';
import { EducationSection } from './components/EducationSection';
import { RolesSection } from './components/RolesSection';
import { ImpactStats } from './components/ImpactStats';
import { GallerySection } from './components/GallerySection';
import { KnowledgeSection } from './components/KnowledgeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SEOHead } from './components/SEOHead';
import type { ProjectItem } from './data/profileData';

export function App() {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  const handleOpenContact = () => {
    if (contactFormRef.current) {
      contactFormRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const contactElem = document.getElementById('contact');
      contactElem?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#1E293B] selection:text-white">
      {/* SEO & Structured Data Head */}
      <SEOHead />

      {/* Sticky Header Navbar */}
      <Navbar onOpenContactModal={handleOpenContact} />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Short Introduction / About Section */}
      <AboutSection />

      {/* 3. Areas of Social Work */}
      <SocialWorkAreas />

      {/* 4. Featured Projects */}
      <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
      />

      {/* 5. Journey / Timeline */}
      <TimelineSection />

      {/* 6. Professional Experience */}
      <ExperienceSection />

      {/* 7. Child Protection & Women's Empowerment / Gender Specialist */}
      <GenderSpecialistSection />

      {/* 8. Training & Capacity Building */}
      <TrainingSection onInviteClick={handleOpenContact} />

      {/* 9. Education & Research */}
      <EducationSection />

      {/* 10. Professional Roles */}
      <RolesSection />

      {/* 11. Impact Stats */}
      <ImpactStats />

      {/* 12. Photo Gallery */}
      <GallerySection />

      {/* 13. Knowledge / Articles */}
      <KnowledgeSection />

      {/* 14. Contact CTA & Form */}
      <ContactSection formRef={contactFormRef} />

      {/* 15. Footer */}
      <Footer />
    </div>
  );
}

export default App;
