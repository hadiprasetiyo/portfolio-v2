import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiArrowDown, HiDownload, HiMail } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import ParticleField from '../components/ParticleField'
import { personalInfo } from '../constants'
import { staggerContainer, staggerItem } from '../animations/variants'
import { useState, useEffect } from 'react'

// Typewriter hook
const TYPED_STRINGS = [
  'Full-Stack Web Developer',
  'UI/UX Designer',
  'Project Manager',
  'Problem Solver',
]

const useTypewriter = (strings, speed = 75, pause = 1800) => {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = strings[idx % strings.length]
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1)
        setText(next)
        if (next === current) setTimeout(() => setDeleting(true), pause)
      } else {
        const next = text.slice(0, -1)
        setText(next)
        if (next === '') {
          setDeleting(false)
          setIdx(prev => (prev + 1) % strings.length)
        }
      }
    }, deleting ? speed / 2 : speed)
    return () => clearTimeout(timeout)
  }, [text, deleting, idx, strings, speed, pause])

  return text
}

const Hero = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  // Parallax transforms
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  const typedText = useTypewriter(TYPED_STRINGS)

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#0F172A' }}
    >
      {/* ── Background Layer (parallax) ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden
      >
        {/* Ambient glow orbs */}
        <div
          className="absolute rounded-full"
          style={{
            top: '15%', left: '10%',
            width: 500, height: 500,
            background: 'radial-gradient(circle, rgba(59,130,246,0.07) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: '20%', right: '10%',
            width: 400, height: 400,
            background: 'radial-gradient(circle, rgba(245,158,11,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59,130,246,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59,130,246,0.04) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #0F172A 100%)',
          }}
        />
      </motion.div>

      {/* ── Particles ── */}
      <div className="absolute inset-0" aria-hidden>
        <ParticleField />
      </div>

      {/* ── Hero Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-16 w-full text-center"
      >
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-5"
        >

          {/* Greeting */}
          <motion.p
            variants={staggerItem}
            className="text-base md:text-lg"
            style={{ color: '#94a3b8', fontFamily: 'monospace' }}
          >
            Halo, saya 👋
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={staggerItem}
            className="font-black leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 10vw, 6rem)' }}
          >
            <span style={{ color: 'white' }}>HADI </span>
            <span
              style={{
                background: 'linear-gradient(135deg, #FBBF24, #F59E0B, #D97706)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              PRASETIYO
            </span>
          </motion.h1>

          {/* Typewriter */}
          <motion.div
            variants={staggerItem}
            className="flex items-center gap-1 text-lg md:text-2xl h-10"
            style={{ fontFamily: 'monospace', color: '#60A5FA' }}
          >
            <span style={{ color: '#64748b', marginRight: '0.5rem' }}>{'>'}</span>
            <span>{typedText}</span>
            <span
              style={{
                display: 'inline-block',
                width: 2,
                height: '1.25em',
                background: '#60A5FA',
                marginLeft: 2,
                animation: 'blink 1s step-end infinite',
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="max-w-2xl text-base md:text-lg leading-relaxed"
            style={{ color: '#94a3b8' }}
          >
            {personalInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap items-center justify-center gap-3 pt-2"
          >
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              Lihat Proyek
              <HiArrowDown className="w-4 h-4" />
            </button>
            <a
              href="/cv/CV-Hadi-Prasetiyo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <HiDownload className="w-4 h-4" />
              Lihat CV
            </a>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              <HiMail className="w-4 h-4" />
              Hubungi Saya
            </button>
          </motion.div>

          {/* Social */}
          <motion.div variants={staggerItem} className="flex items-center gap-5 pt-1">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <FaGithub className="w-4 h-4" />
              GitHub
            </a>
            <span style={{ width: 1, height: 16, background: '#334155' }} />
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#64748b' }}
              onMouseEnter={e => e.currentTarget.style.color = '#60A5FA'}
              onMouseLeave={e => e.currentTarget.style.color = '#64748b'}
            >
              <FaLinkedinIn className="w-4 h-4" />
              LinkedIn
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span style={{ color: '#475569', fontSize: 11, fontFamily: 'monospace', letterSpacing: '0.2em' }}>
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 32, background: 'linear-gradient(to bottom, #475569, transparent)' }}
        />
      </motion.div>

      {/* Global keyframes */}
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1 } 50% { opacity: 0 } }
      `}</style>
    </section>
  )
}

export default Hero
