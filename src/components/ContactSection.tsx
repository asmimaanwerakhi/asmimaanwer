// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#D4AF37]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  05 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#D4AF37]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-6"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
                     LET'S WORK
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                    TOGETHER.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#A8988B] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an ambitious web application to build, a creative engineering role, or a project collaboration in mind? Reach out directly via any channel below.
              </p>

              {/* Direct Channels */}
              <div className="space-y-4 pt-4 border-t border-[#8C6D4F]/25">
                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-1">
                    // DIRECT INBOX
                  </span>
                  <a
                    href="mailto:anwerasmima23@gmail.com"
                    className="text-xs sm:text-sm font-light text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    anwerasmima23@gmail.com
                  </a>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-1">
                    // EDUCATION
                  </span>
                  <p
                    className="text-xs text-[#B3A497] font-light"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    Computing & Information System, Daffodil International University — 2023–2027
                  </p>
                </div>

                {/* Social Network Badges */}
                <div className="pt-2">
                  <span className="block text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#8C6D4F] mb-2.5">
                    // SOCIAL CHANNELS
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <a
                      href="https://www.linkedin.com/in/asmima-anwer-akhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#14100D] hover:border-[#D4AF37] hover:text-white text-[#EAD8C7] transition-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      LinkedIn ↗
                    </a>
                    <a
                      href="https://github.com/asmimaanwerakhi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#14100D] hover:border-[#D4AF37] hover:text-white text-[#EAD8C7] transition-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      GitHub ↗
                    </a>
                    <a
                      href="https://www.facebook.com/inteshaanahi.shomi"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#8C6D4F]/40 bg-[#14100D] hover:border-[#D4AF37] hover:text-white text-[#EAD8C7] transition-all"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Facebook ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#0A0806] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#D4AF37]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#D4AF37]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#D4AF37]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#D4AF37]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D4AF37] text-[#D4AF37] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  PACKET DELIVERED
                </h3>
                <p className="text-xs text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Transmission registered successfully.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // SENDER
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // CHANNEL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Enter transmission payload..."
                    className="w-full bg-[#120F0C] border border-[#8C6D4F]/30 focus:border-[#D4AF37] text-xs text-white placeholder-[#8C6D4F]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#14100D] hover:border-[#D4AF37] hover:bg-[#1A1510] text-[#E8DFD8] hover:text-[#F7E7C4] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  EXECUTE DISPATCH ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        <div className="mt-16 border-t border-[#8C6D4F]/25 pt-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div className="text-center md:text-left">
              <a
                href="#"
                className="text-xs font-semibold tracking-[0.3em] uppercase text-[#EAD8C7] hover:text-[#D4AF37] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Asmima Anwer Akhi
              </a>
              <p className="mt-2 text-[10px] tracking-wide text-[#8C7A69]">
                Full Stack Developer · Data Analyst · Creative Designer
              </p>
            </div>

            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[10px] tracking-[0.18em] uppercase text-[#A8988B]"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <a href="#about" className="hover:text-[#D4AF37] transition-colors">About</a>
              <a href="#work" className="hover:text-[#D4AF37] transition-colors">Projects</a>
              <a href="#skills" className="hover:text-[#D4AF37] transition-colors">Skills</a>
              <a href="#experience" className="hover:text-[#D4AF37] transition-colors">Experience</a>
              <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
            </nav>

            <div className="flex justify-center gap-5 text-[10px] tracking-[0.16em] uppercase md:justify-end">
              <a
                href="https://www.linkedin.com/in/asmima-anwer-akhi/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8988B] hover:text-[#D4AF37] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/asmimaanwerakhi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A8988B] hover:text-[#D4AF37] transition-colors"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-[#8C6D4F]/15 pt-5 text-center">
            <p className="text-[10px] text-[#8C7A69]">
              © {new Date().getFullYear()} Asmima Anwer Akhi. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;