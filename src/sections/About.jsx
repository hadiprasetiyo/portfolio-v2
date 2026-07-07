import { motion } from 'framer-motion'
import { HiAcademicCap, HiLocationMarker, HiSparkles } from 'react-icons/hi'
import SectionWrapper from '../components/SectionWrapper'
import { personalInfo, education } from '../constants'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer, staggerItem, scaleIn } from '../animations/variants'

const StatCard = ({ value, label }) => (
  <motion.div
    variants={scaleIn}
    className="glass-card"
    style={{ padding: '1.25rem', textAlign: 'center' }}
  >
    <p style={{ fontSize: '1.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #FBBF24, #D97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{value}</p>
    <p style={{ fontSize: '0.75rem', color: 'var(--th-text-muted)', marginTop: '0.25rem', fontWeight: 500 }}>{label}</p>
  </motion.div>
)

const About = () => {
  return (
    <SectionWrapper id="about" style={{ background: 'var(--th-card)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          variants={fadeInUp}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>About Me</p>
          <h2 className="section-title">
            Profile
          </h2>
          <div className="section-divider" style={{ margin: '1rem auto 0' }} />
        </motion.div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'start' }}>

          {/* Left — Avatar + Stats */}
          <motion.div
            variants={fadeInLeft}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}
          >
            {/* Avatar card */}
            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Glow */}
              <div style={{
                position: 'absolute',
                inset: '-12px',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(59,130,246,0.08))',
                filter: 'blur(16px)',
                zIndex: 0,
              }} />

              {/* Photo frame */}
              <div style={{
                position: 'relative',
                width: 224,
                height: 224,
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, #1E293B, #253347)',
                border: '1px solid rgba(71,85,105,0.5)',
                overflow: 'hidden',
                zIndex: 1,
              }}>
                <img
                  src="/images/hadiprasetiyo.jpeg"
                  alt="Foto Profil Hadi Prasetiyo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    objectPosition: 'center bottom',
                    backgroundColor: '#ef1b12',
                    display: 'block',
                  }}
                />
              </div>
            </div>
            {/* Stats */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem', width: '100%', maxWidth: '20rem' }}
            >
              <StatCard value="4+" label="Projects" />
              <StatCard value="3+" label="Experiences" />
              <StatCard value="3.82" label="GPA" />
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={fadeInRight} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--th-text)', marginBottom: '0.75rem' }}>
                Fresh Graduate yang Siap Berkontribusi
              </h3>
              <p style={{ color: 'var(--th-text-muted)', lineHeight: 1.8 }}>
                {personalInfo.shortBio}
              </p>
            </div>

            {/* Education card */}
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <HiAcademicCap style={{ width: 20, height: 20, color: '#F59E0B' }} />
                <h4 style={{ fontWeight: 600, color: 'var(--th-text)', fontSize: '0.875rem' }}>Pendidikan</h4>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem' }}>
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--th-text)', fontSize: '0.95rem' }}>{education.university}</p>
                  <p style={{ color: 'var(--th-text-muted)', fontSize: '0.8rem' }}>{education.faculty}</p>
                  <p style={{ color: '#60A5FA', fontSize: '0.8rem', fontWeight: 500 }}>{education.major} • {education.degree}</p>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <p style={{ color: '#FBBF24', fontWeight: 700 }}>{education.gpa}</p>
                  <p style={{ color: '#475569', fontSize: '0.75rem' }}>{education.year}</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', color: 'var(--th-text-dim)', fontSize: '0.75rem' }}>
                <HiLocationMarker style={{ width: 14, height: 14 }} />
                {education.location}
              </div>
            </div>

            {/* Career goal */}
            <div className="glass-card" style={{ padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <HiSparkles style={{ width: 20, height: 20, color: '#60A5FA' }} />
                <h4 style={{ fontWeight: 600, color: 'var(--th-text)', fontSize: '0.875rem' }}>Tujuan Karier</h4>
              </div>
              <p style={{ color: 'var(--th-text-muted)', fontSize: '0.875rem', lineHeight: 1.75 }}>
                {personalInfo.careerGoal}
              </p>
            </div>

            {/* Info grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
              {[
                { label: 'Lokasi', value: personalInfo.location },
                { label: 'Status', value: 'Fresh Graduate' },
                { label: 'Email', value: personalInfo.email },
                { label: 'Fokus', value: 'Web Development' },
              ].map(item => (
                <div key={item.label} className="glass-card" style={{ padding: '0.75rem 1rem' }}>
                  <p style={{ color: 'var(--th-text-dim)', fontSize: '0.7rem', marginBottom: '0.2rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{item.label}</p>
                  <p style={{ color: 'var(--th-text-2)', fontSize: '0.8rem', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default About
