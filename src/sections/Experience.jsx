import { useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { HiBriefcase, HiCalendar, HiLocationMarker, HiChevronRight } from 'react-icons/hi'
import SectionWrapper from '../components/SectionWrapper'
import { experiences } from '../constants'
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/variants'

const ExperienceCard = ({ exp }) => (
  <motion.div
    whileHover={{ y: -4 }}
    transition={{ type: 'spring', stiffness: 250, damping: 20 }}
    className="glass-card group"
    style={{ padding: '1.25rem 1.5rem' }}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
      <span
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          fontSize: '0.7rem',
          fontWeight: 700,
          fontFamily: 'monospace',
          color: '#F59E0B',
          background: 'rgba(245,158,11,0.08)',
          border: '1px solid rgba(245,158,11,0.2)',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
        }}
      >
        {exp.batch}
      </span>

      <span
        style={{
          fontSize: '0.7rem',
          color: '#64748b',
          fontFamily: 'monospace',
          border: '1px solid rgba(51,65,85,0.6)',
          padding: '0.25rem 0.625rem',
          borderRadius: '9999px',
        }}
      >
        {exp.type}
      </span>
    </div>

    <h3
      className="group-hover:text-amber-400 transition-colors"
      style={{ fontWeight: 700, color: 'white', fontSize: '0.95rem', marginBottom: '0.25rem' }}
    >
      {exp.role}
    </h3>

    <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: '0.2rem' }}>
      <HiBriefcase style={{ width: 14, height: 14, color: '#60A5FA' }} />
      <p style={{ color: '#60A5FA', fontSize: '0.8rem', fontWeight: 600 }}>{exp.company}</p>
    </div>

    <p style={{ color: '#64748b', fontSize: '0.7rem', fontWeight: 500, marginBottom: '0.2rem' }}>
      {exp.program}
    </p>

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: '0.6rem 0 0.75rem' }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', color: '#64748b' }}>
        <HiCalendar style={{ width: 14, height: 14 }} />
        {exp.period}
      </span>

      <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: '0.7rem', color: '#64748b' }}>
        <HiLocationMarker style={{ width: 14, height: 14 }} />
        {exp.location}
      </span>
    </div>

    <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '0.75rem' }}>
      {exp.description}
    </p>

    <ul style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: '0.75rem' }}>
      {exp.highlights.map((h, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, fontSize: '0.7rem', color: '#94a3b8' }}>
          <HiChevronRight style={{ width: 14, height: 14, color: '#F59E0B', marginTop: 2, flexShrink: 0 }} />
          {h}
        </li>
      ))}
    </ul>

    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 6,
        paddingTop: '0.6rem',
        borderTop: '1px solid rgba(51,65,85,0.5)',
      }}
    >
      {exp.tech.map(t => (
        <span
          key={t}
          style={{
            fontSize: '0.65rem',
            padding: '0.2rem 0.55rem',
            borderRadius: 6,
            background: 'rgba(15,23,42,0.6)',
            border: '1px solid rgba(51,65,85,0.6)',
            color: '#94a3b8',
            fontFamily: 'monospace',
          }}
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
)

const TimelineItem = ({ exp, index, top, cardRef }) => {
  const isLeft = index % 2 === 0

  return (
    <div
      style={{
        position: 'absolute',
        top,
        left: 0,
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 40px 1fr',
        gap: 0,
        alignItems: 'center',
      }}
    >
      <div style={{ paddingRight: 16 }}>
        {isLeft && (
          <motion.div
            ref={cardRef}
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.12 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                right: -32,
                width: 32,
                height: 2,
                transform: 'translateY(-50%)',
                background: 'linear-gradient(90deg, rgba(245,158,11,0.35), rgba(245,158,11,0.1))',
              }}
            />
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ position: 'relative', zIndex: 3 }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'rgba(245,158,11,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: '#F59E0B',
                boxShadow: '0 0 8px rgba(245,158,11,0.5)',
              }}
            />
          </div>
        </div>
      </div>

      <div style={{ paddingLeft: 16 }}>
        {!isLeft && (
          <motion.div
            ref={cardRef}
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: index * 0.12 }}
            style={{ position: 'relative' }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: -32,
                width: 32,
                height: 2,
                transform: 'translateY(-50%) scaleX(-1)',
                background: 'linear-gradient(90deg, rgba(245,158,11,0.35), rgba(245,158,11,0.1))',
              }}
            />
            <ExperienceCard exp={exp} />
          </motion.div>
        )}
      </div>
    </div>
  )
}

const MobileTimelineItem = ({ exp, index, isLast }) => (
  <div style={{ display: 'flex', gap: 12 }}>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
      <div
        style={{
          width: 16,
          height: 16,
          borderRadius: '50%',
          background: 'rgba(245,158,11,0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 6,
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            background: '#F59E0B',
            boxShadow: '0 0 6px rgba(245,158,11,0.4)',
          }}
        />
      </div>

      {!isLast && (
        <div
          style={{
            flex: 1,
            width: 2,
            background: 'linear-gradient(to bottom, rgba(245,158,11,0.3), rgba(245,158,11,0.05))',
          }}
        />
      )}
    </div>

    <motion.div
      variants={fadeInLeft}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.1 }}
      style={{ flex: 1, paddingBottom: isLast ? 0 : 16 }}
    >
      <ExperienceCard exp={exp} />
    </motion.div>
  </div>
)

const Experience = () => {
  const cardRefs = useRef([])
  const [layout, setLayout] = useState({
    tops: [],
    height: 0,
    lineTop: 0,
    lineHeight: 0,
  })

  useLayoutEffect(() => {
    const updateLayout = () => {
      const heights = experiences.map((_, index) => {
        return cardRefs.current[index]?.getBoundingClientRect().height || 0
      })

      if (heights.some(height => height === 0)) return

      const tops = []
      let currentTop = 0
      const density = 0.58

      heights.forEach((height, index) => {
        tops[index] = currentTop
        currentTop += height * density
      })

      const firstDot = tops[0] + heights[0] / 2
      const lastIndex = heights.length - 1
      const lastDot = tops[lastIndex] + heights[lastIndex] / 2

      setLayout({
        tops,
        height: tops[lastIndex] + heights[lastIndex],
        lineTop: firstDot,
        lineHeight: lastDot - firstDot,
      })
    }

    updateLayout()

    const observer = new ResizeObserver(updateLayout)

    cardRefs.current.forEach(card => {
      if (card) observer.observe(card)
    })

    window.addEventListener('resize', updateLayout)

    const timer = setTimeout(updateLayout, 300)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', updateLayout)
      clearTimeout(timer)
    }
  }, [])

  return (
    <SectionWrapper id="experience" style={{ background: 'rgba(6,13,27,0.4)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <motion.div variants={fadeInUp} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Experience</p>

          <h2 className="section-title">
            Career <span className="text-gradient-amber">Journey</span>
          </h2>

          <div className="section-divider" style={{ margin: '1rem auto 0' }} />

          <p
            style={{
              color: '#94a3b8',
              maxWidth: '36rem',
              margin: '1rem auto 0',
              fontSize: '0.875rem',
            }}
          >
            Pengalaman yang membentuk kemampuan dalam pengembangan aplikasi web modern, pemecahan masalah, dan penerapan praktik terbaik dalam pengembangan perangkat lunak.
          </p>
        </motion.div>

        <div
          className="hidden md:block"
          style={{
            position: 'relative',
            height: layout.height || 900,
          }}
        >
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: layout.lineTop,
              height: layout.lineHeight,
              transform: 'translateX(-50%)',
              width: 2,
              background: 'linear-gradient(to bottom, rgba(245,158,11,0.3), rgba(245,158,11,0.08))',
              zIndex: 1,
            }}
          />

          {experiences.map((exp, idx) => (
            <TimelineItem
              key={exp.id}
              exp={exp}
              index={idx}
              top={layout.tops[idx] || 0}
              cardRef={(el) => (cardRefs.current[idx] = el)}
            />
          ))}
        </div>

        <div className="block md:hidden">
          {experiences.map((exp, idx) => (
            <MobileTimelineItem
              key={exp.id}
              exp={exp}
              index={idx}
              isLast={idx === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}

export default Experience