import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiAcademicCap, HiDatabase, HiX, HiEye } from 'react-icons/hi'
import { BsTerminalFill } from 'react-icons/bs'
import SectionWrapper from '../components/SectionWrapper'
import { certificates } from '../constants'
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants'

// Safe icon map
const ICON_MAP = {
  HiAcademicCap,
  HiDatabase,
  BsTerminalFill,
  SiOracle: HiDatabase,
}

const categoryGradients = {
  'Database': { bar: 'from-red-400 to-orange-400', bg: 'from-red-500/15 to-orange-500/5' },
  'Program Magang': { bar: 'from-blue-400 to-indigo-400', bg: 'from-blue-500/15 to-indigo-500/5' },
  'Tools & DevOps': { bar: 'from-cyan-400 to-blue-400', bg: 'from-cyan-500/15 to-blue-500/5' },
}

/* ─────────────────────────────────────────────────────────
   Image Lightbox — just shows the certificate image
   ───────────────────────────────────────────────────────── */
const CertificateLightbox = ({ cert, onClose }) => {
  if (!cert) return null

  return (
    <AnimatePresence>
      {/* Backdrop — click to close */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed', inset: 0, zIndex: 9998,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '2rem',
          cursor: 'zoom-out',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute', top: 20, right: 20, zIndex: 10,
            width: 36, height: 36, borderRadius: '50%',
            background: 'rgba(15,23,42,0.8)',
            border: '1px solid rgba(51,65,85,0.6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#94a3b8', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)' }}
          onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(51,65,85,0.6)' }}
        >
          <HiX style={{ width: 18, height: 18, pointerEvents: 'none' }} />
        </button>

        {/* Certificate Image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          src={cert.image}
          alt={cert.title}
          onClick={(e) => e.stopPropagation()}
          style={{
            maxWidth: '90vw',
            maxHeight: '80vh',
            borderRadius: '0.75rem',
            border: '1px solid rgba(51,65,85,0.4)',
            boxShadow: '0 25px 60px rgba(0,0,0,0.5)',
            objectFit: 'contain',
            cursor: 'default',
          }}
        />

        {/* Title label below image */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          style={{
            marginTop: '1rem',
            color: '#94a3b8',
            fontSize: '0.8rem',
            fontWeight: 500,
            textAlign: 'center',
            maxWidth: '90vw',
          }}
        >
          {cert.title} — {cert.issuer}
        </motion.p>
      </motion.div>
    </AnimatePresence>
  )
}

/* ─────────────────────────────────────────────────────────
   Certificate Card  — compact, with small eye icon
   ───────────────────────────────────────────────────────── */
const CertificateCard = ({ cert, onView }) => {
  const IconComp = ICON_MAP[cert.icon] || HiAcademicCap
  const grad = categoryGradients[cert.category] || { bar: 'from-amber-400 to-amber-600', bg: 'from-amber-500/15 to-orange-500/5' }

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="w-full sm:w-1/2 lg:w-1/4 px-2.5 mb-5"
    >
      {/* Visual card — gap (px-2.5) lives outside this div */}
      <div className="bg-[#1E293B]/60 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden group h-full">
        {/* Colored top strip */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${grad.bar}`} />

        <div className="p-5 md:p-6">
          {/* Icon + Year + View button */}
          <div className="flex items-start justify-between mb-4">
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${grad.bg}`}
              style={{ color: cert.color }}
            >
              <IconComp className="w-6 h-6" />
            </div>

            <span className="text-xs font-semibold px-2.5 py-1 rounded-full
                             bg-[#0F172A]/60 border border-slate-700/60 text-slate-400 font-mono">
              {cert.year}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-white text-sm mb-1.5 leading-snug group-hover:text-amber-400 transition-colors">
            {cert.title}
          </h3>

          {/* Issuer */}
          <p className="text-blue-400 text-xs font-medium mb-3">{cert.issuer}</p>

          {/* Description */}
          <p className="text-slate-500 text-xs leading-relaxed mb-4">{cert.description}</p>

          {/* Footer — category + view icon */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-700/40">
            <span className="text-xs px-2.5 py-1 rounded-full bg-[#0F172A]/60 border border-slate-700/50
                             text-slate-500 font-mono">
              {cert.category}
            </span>
            <button
              onClick={() => onView(cert)}
              title="Lihat Detail"
              style={{
                width: 28, height: 28,
                borderRadius: '0.5rem',
                background: 'rgba(15,23,42,0.6)',
                border: '1px solid rgba(51,65,85,0.6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#64748b',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#FBBF24'
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.4)'
                e.currentTarget.style.background = 'rgba(245,158,11,0.06)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#64748b'
                e.currentTarget.style.borderColor = 'rgba(51,65,85,0.6)'
                e.currentTarget.style.background = 'rgba(15,23,42,0.6)'
              }}
            >
              <HiEye style={{ width: 14, height: 14, pointerEvents: 'none' }} />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/* ─────────────────────────────────────────────────────────
   Certificates Section
   ───────────────────────────────────────────────────────── */
const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <SectionWrapper id="certificates" className="bg-[#060D1B]/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="text-xs font-mono font-semibold tracking-widest text-amber-500 uppercase mb-3">
            Certificates
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Certifications &{' '}
            <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Sertifikasi yang diperoleh sebagai bukti kompetensi teknis dan pengembangan diri.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="flex flex-wrap justify-center -mx-2.5"
        >
          {certificates.map(cert => (
            <CertificateCard
              key={cert.id}
              cert={cert}
              onView={setSelectedCert}
            />
          ))}
        </motion.div>

      </div>

      {/* Image Lightbox */}
      {selectedCert && (
        <CertificateLightbox cert={selectedCert} onClose={() => setSelectedCert(null)} />
      )}
    </SectionWrapper>
  )
}

export default Certificates
