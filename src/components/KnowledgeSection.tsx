import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Clock, Tag, ArrowRight, X, User } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';
import type { ArticleItem } from '../data/profileData';

export const KnowledgeSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="knowledge" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <BookOpen className="w-4 h-4 text-[#F59E0B]" />
            Field Insights & Publications
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Knowledge & Social Impact Articles
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Thoughtful reflections, field methodologies, and advocacy papers on child protection, gender equality, and community development.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROFILE_DATA.articles.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#F8FAFC] p-8 rounded-3xl border border-[#1E293B]/10 editorial-shadow-hover flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#1E293B] text-amber-300 text-xs font-bold">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-xs text-[#64748B]">
                    <Clock className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-heading text-[#1E293B] hover:text-[#2563EB] transition-colors cursor-pointer" onClick={() => setSelectedArticle(article)}>
                  {article.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {article.summary}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((t, i) => (
                    <span key={i} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-white text-[#1E293B] text-[11px] font-semibold border border-[#1E293B]/5">
                      <Tag className="w-3 h-3 text-[#F59E0B]" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setSelectedArticle(article)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors shadow-xs"
              >
                Read Complete Article
                <ArrowRight className="w-4 h-4 text-[#F59E0B]" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl border border-[#1E293B]/20 text-[#0F172A]">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 p-2.5 rounded-full bg-[#F8FAFC] text-[#1E293B] hover:bg-[#1E293B] hover:text-white transition-colors"
              aria-label="Close Article"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-[#1E293B]/10 pb-4">
                <span className="px-3 py-1 rounded-full bg-[#1E293B] text-amber-300 text-xs font-bold">
                  {selectedArticle.category}
                </span>
                <span className="text-xs text-[#64748B] flex items-center gap-1">
                  <User className="w-3.5 h-3.5 text-[#F59E0B]" /> By Dr. A. Srinivasan
                </span>
                <span className="text-xs text-[#64748B] flex items-center gap-1 ml-auto">
                  <Clock className="w-3.5 h-3.5 text-[#F59E0B]" /> {selectedArticle.readTime}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#1E293B]">
                {selectedArticle.title}
              </h2>

              <div className="space-y-4 text-sm sm:text-base text-[#64748B] leading-relaxed">
                {selectedArticle.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-[#1E293B]/10 flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {selectedArticle.tags.map((t, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md bg-[#EFF6FF] text-[#1E293B] text-xs font-semibold">
                      #{t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-5 py-2 rounded-full bg-[#1E293B] text-white text-xs font-bold hover:bg-[#2563EB] transition-colors"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
