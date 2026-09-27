import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, CheckCircle2, HeartHandshake, ShieldCheck } from 'lucide-react';
import { PROFILE_DATA } from '../data/profileData';

interface ContactSectionProps {
  formRef?: React.RefObject<HTMLDivElement | null>;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ formRef }) => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    purpose: 'Training / Workshop',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <section id="contact" ref={formRef} className="py-20 bg-[#F8FAFC] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EFF6FF] text-[#1E293B] text-xs font-bold tracking-wider uppercase mb-3">
            <HeartHandshake className="w-4 h-4 text-[#F59E0B]" />
            Initiate Contact & Collaboration
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#1E293B] tracking-tight mb-4">
            Let's Work Together for Social Impact
          </h2>
          <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full mb-6" />
          <p className="text-base sm:text-lg text-[#64748B] leading-relaxed">
            Reach out for workshop facilitation, training invitations, social project consultation, or community welfare initiatives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Direct Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-white p-8 rounded-3xl border border-[#1E293B]/10 editorial-shadow space-y-6">
              <h3 className="text-xl font-bold font-heading text-[#1E293B] border-b border-[#1E293B]/10 pb-4">
                Direct Contact Information
              </h3>

              <div className="space-y-5">
                <a
                  href={`tel:${PROFILE_DATA.contact.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#EFF6FF] transition-colors border border-[#1E293B]/5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#1E293B] uppercase tracking-wider">Phone / Mobile</p>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">{PROFILE_DATA.contact.phone}</p>
                    <p className="text-[11px] text-[#64748B]">Available for professional enquiries</p>
                  </div>
                </a>

                <a
                  href={`mailto:${PROFILE_DATA.contact.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] hover:bg-[#EFF6FF] transition-colors border border-[#1E293B]/5 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F59E0B] flex items-center justify-center shrink-0 group-hover:bg-[#2563EB] transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#1E293B] uppercase tracking-wider">Email Address</p>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">{PROFILE_DATA.contact.email}</p>
                    <p className="text-[11px] text-[#64748B]">Primary electronic correspondence</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FAFC] border border-[#1E293B]/5">
                  <div className="w-10 h-10 rounded-xl bg-[#1E293B] text-[#F59E0B] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-extrabold text-[#1E293B] uppercase tracking-wider">Address & Regional Context</p>
                    <p className="text-sm font-semibold text-[#0F172A] mt-0.5">{PROFILE_DATA.contact.address}</p>
                    <p className="text-[11px] text-[#64748B]">{PROFILE_DATA.contact.location}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#1E293B]/10 text-xs text-[#64748B] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                All communication is treated with complete confidentiality.
              </div>
            </div>
          </motion.div>

          {/* Right Column Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#1E293B]/10 editorial-shadow">
              
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EFF6FF] text-[#2563EB] mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-[#1E293B]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#64748B] max-w-md mx-auto">
                    Thank you for reaching out, {formData.name}. Dr. Srinivasan will review your message and respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        email: '',
                        phone: '',
                        purpose: 'Training / Workshop',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold font-heading text-[#1E293B] mb-4">
                    Send a Message / Engagement Request
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Anand Kumar"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                        Organization / Institution
                      </label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder="e.g. NGO / University / Department"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                      Purpose of Enquiry *
                    </label>
                    <select
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                    >
                      <option value="Training / Workshop">Training / Workshop Request</option>
                      <option value="Social Project Collaboration">Social Project Collaboration</option>
                      <option value="Speaking Invitation">Speaking Invitation</option>
                      <option value="Counseling Inquiry">Counseling Inquiry</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1E293B] uppercase tracking-wider mb-2">
                      Detailed Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your request or invitation..."
                      className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-[#1E293B]/15 focus:outline-none focus:ring-2 focus:ring-[#1E293B] text-sm text-[#0F172A]"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-sm font-bold text-white bg-[#1E293B] hover:bg-[#2563EB] transition-colors shadow-md disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Submit Enquiry</span>
                        <Send className="w-4 h-4 text-[#F59E0B]" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
