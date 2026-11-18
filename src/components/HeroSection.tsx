import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 18, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowResumeNotice(true);
    setTimeout(() => {
      setShowResumeNotice(false);
    }, 3500);
  };

  return (
    <section className="relative w-full min-h-[100svh] overflow-hidden bg-black text-[#E8DFD8] font-sans selection:bg-[#cbb59d] selection:text-black cursor-none">
      {/* ================= RESUME COMING SOON TOAST ================= */}
      <AnimatePresence>
        {showResumeNotice && (
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-4 left-4 right-4 z-[100] pointer-events-auto sm:top-8 sm:left-1/2 sm:right-auto sm:-translate-x-1/2"
          >
            <div className="flex items-center space-x-3.5 rounded-sm border border-[#D4AF37] bg-[#120F0C]/95 px-4 py-3.5 backdrop-blur-md shadow-[0_10px_35px_rgba(212,175,55,0.25)] sm:px-6">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-ping" />
              <div className="flex flex-col">
                <span 
                  className="text-[11px] font-mono tracking-[0.25em] uppercase text-[#F7E7C4] font-semibold"
                >
                  RESUME // COMING SOON
                </span>
                <span className="text-[10px] text-[#A8988B] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Updated CV is currently in preparation.
                </span>
              </div>
              <button
                onClick={() => setShowResumeNotice(false)}
                className="ml-4 text-[#C4B5A5] hover:text-white text-xs transition-colors"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#D4AF37]/40 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(212, 175, 55, 0.1)' : 'rgba(235, 215, 195, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED IMAGE LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <img
          src="/videos/Asmima-Hero-Banner.png"
          alt=""
          className="h-full w-full max-w-none object-cover object-[72%_center] opacity-80 md:h-screen md:w-auto md:object-contain md:object-center md:opacity-100 md:origin-right md:scale-[0.98] lg:scale-100"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10 pointer-events-none md:hidden" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none md:hidden" />
        <div className="absolute inset-y-0 left-0 hidden w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none md:block" />

      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-between px-5 pt-5 pb-7 pointer-events-none sm:px-12 sm:pt-6 sm:pb-8 lg:px-16">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#EAD8C7] hover:opacity-75 transition-opacity"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Asmima
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#C4B5A5] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 hover:text-[#FFF5EB]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37]/50 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: LinkedIn + Let's Talk */}
          <div className="flex items-center space-x-2.5 sm:space-x-3 ml-auto md:ml-0">
            {/* LinkedIn Icon Link */}
            <a
              href="https://www.linkedin.com/in/asmima-anwer-akhi/"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex h-10 w-10 items-center justify-center rounded-sm border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.08)]"
              title="Asmima Anwer Akhi on LinkedIn"
              aria-label="Asmima Anwer Akhi on LinkedIn"
            >
              <svg
                className="w-3.5 h-3.5 fill-current transition-transform duration-300 group-hover:scale-110"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.35V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.55 9h3.57v11.452H3.55z" />
              </svg>
            </a>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex min-h-10 items-center space-x-2 text-[10px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.24em] font-light uppercase py-2 px-3 sm:px-4 border border-[#8C6D4F]/50 hover:border-[#D4AF37] text-[#EAD8C7] transition-all duration-300 backdrop-blur-sm"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S TALK</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                ↗
              </span>
            </a>
          </div>
        </header>

        <nav
          aria-label="Mobile navigation"
          className="mt-6 flex items-center justify-between gap-2 text-[8px] font-light tracking-[0.1em] uppercase text-[#C4B5A5] md:hidden"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="py-2 transition-colors hover:text-[#FFF5EB]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Main Hero Row */}
        <div className="relative my-auto flex w-full flex-col items-center justify-between py-12 md:flex-row md:py-4">
          
          {/* LEFT: Balanced Headline & Actions */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[40rem] pointer-events-auto z-20"
          >
            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-5xl min-[380px]:text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: I BUILD */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#D5CBC0] to-[#605448] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  I BUILD
                </span>

                {/* Line 2: DIGITAL */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F7E7C4] via-[#C99E5D] to-[#543B1A] drop-shadow-[0_8px_25px_rgba(201,158,93,0.35)]">
                  What
                </span>

                {/* Line 3: EXPERIENCES */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#DFBE8A] via-[#9B7640] to-[#342410] drop-shadow-[0_10px_30px_rgba(155,118,64,0.4)]">
                  Matters.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle Technologies */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-[10px] sm:text-[11px] md:text-xs font-normal tracking-[0.28em] uppercase text-[#C4B29E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FULL STACK DEVELOPER <span className="text-[#8C6D4F] mx-1">•</span> DATA ANALYST <span className="text-[#8C6D4F] mx-1">•</span> CREATIVE DESIGNER
              </p>
            </motion.div>

            {/* 3-Line Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#A8988B] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                I turn bold ideas into interactive, dynamic, and visually engaging web &amp; mobile experiences.
                <br />
                Where frontend elegance meets robust full-stack engineering.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-col gap-3 min-[380px]:flex-row min-[380px]:gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex min-h-12 w-full items-center justify-center space-x-3 px-4 min-[380px]:w-auto sm:px-7 py-3.5 border border-[#8C6D4F] bg-[#120F0C]/80 hover:border-[#D4AF37] text-[#EAD8C7] hover:text-[#FFF5EB] text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.18)]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E8D7C5]/40 to-transparent pointer-events-none" />
                <span>EXPLORE MY WORK</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Resume Button with Coming Soon Popup */}
              <motion.button
                type="button"
                onClick={handleResumeClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex min-h-12 w-full items-center justify-center space-x-2 px-4 min-[380px]:w-auto sm:px-7 py-3.5 border border-[#8C6D4F]/40 hover:border-[#D4AF37] text-[#BFA895] hover:text-[#EAD8C7] text-[10px] sm:text-[11px] font-medium tracking-[0.16em] sm:tracking-[0.24em] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>RESUME</span>
                <span className="transform transition-transform duration-300 group-hover:translate-y-0.5 text-xs">
                  ↓
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* 1. Quote Mark */}
            <span className="text-xl text-[#C99E5D] leading-none font-serif mb-2">
              “
            </span>

           
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;