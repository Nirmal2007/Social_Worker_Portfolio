import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Field Work', 'Workshops', 'Community', 'Events'];

  const filteredPhotos = activeCategory === 'All'
    ? PROFILE_DATA.galleryPhotos
    : PROFILE_DATA.galleryPhotos.filter(p => p.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <ImageIcon className="w-4 h-4 text-[#F59E0B]" />
            Visual Record of Field Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Fieldwork & Program Gallery
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Photographic evidence documenting Dr. Srinivasan's workshops, community support group meetings, adolescent sessions, and stakeholder interactions.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-[#1E293B] text-white shadow-md'
                  : 'bg-white text-[#0F172A] hover:bg-[#EFF6FF] hover:text-[#1E293B] border border-[#1E293B]/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, idx) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className="group relative h-64 rounded-2xl overflow-hidden bg-white border border-[#1E293B]/10 editorial-shadow-hover cursor-pointer"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B]/90 via-[#1E293B]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[11px] font-bold text-amber-300 uppercase tracking-wider mb-1">
                  {photo.category}
                </span>
                <p className="text-xs font-semibold leading-snug">
                  {photo.title}
                </p>
                <div className="mt-2 flex items-center gap-1 text-[10px] text-slate-200">
                  <Maximize2 className="w-3 h-3 text-amber-300" /> Click to enlarge
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 sm:left-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextPhoto}
            className="absolute right-4 sm:right-8 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Next photo"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center space-y-4">
            <img
              src={filteredPhotos[lightboxIndex].url}
              alt={filteredPhotos[lightboxIndex].alt}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />
            <div className="text-center text-white space-y-1">
              <span className="px-3 py-1 rounded-full bg-[#F59E0B] text-black text-xs font-bold uppercase">
                {filteredPhotos[lightboxIndex].category}
              </span>
              <h3 className="text-base font-bold font-heading">
                {filteredPhotos[lightboxIndex].title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
