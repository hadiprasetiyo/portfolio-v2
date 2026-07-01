import { motion } from 'framer-motion'
import {
  SiReact, SiJavascript, SiHtml5, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiMysql, SiGit, SiGithub, SiPostman, SiFigma, SiCss,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import SectionWrapper from '../components/SectionWrapper'
import { skillCategories } from '../constants'
import { fadeInUp, staggerContainer, staggerItem } from '../animations/variants'

// Map icon string names → actual React components
const ICON_MAP = {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3: SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
  SiGithub,
  SiVisualstudiocode: VscVscode,
  SiPostman,
  SiFigma,
}

const SkillBadge = ({ skill }) => {
  const IconComp = ICON_MAP[skill.icon]

  return (
    <motion.div
      variants={staggerItem}
      whileHover={{ y: -3, scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.625rem 1rem',
        borderRadius: '0.75rem',
        background: 'rgba(30,41,59,0.8)',
        border: '1px solid rgba(51,65,85,0.6)',
        fontSize: '0.875rem',
        fontWeight: 500,
        color: '#cbd5e1',
        cursor: 'default',
        transition: 'all 0.2s ease',
      }}
    >
      {IconComp && (
        <IconComp style={{ width: 16, height: 16, flexShrink: 0, color: skill.color }} />
      )}
      <span>{skill.name}</span>
    </motion.div>
  )
}

const Skills = () => {
  return (
    <SectionWrapper id="skills">
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">Skills</p>
          <h2 className="section-title">
            Tech{' '}
            <span className="text-gradient-amber">Stack</span>
          </h2>
          <div className="section-divider" style={{ margin: '1rem auto 0' }} />
          <p style={{ color: '#94a3b8', marginTop: '1rem', maxWidth: '36rem', margin: '1rem auto 0', fontSize: '0.875rem' }}>
            Teknologi dan tools yang saya gunakan dalam pengembangan aplikasi web, dari frontend hingga backend.
          </p>
        </motion.div>

        {/* Skill categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="glass-card"
              style={{ padding: '1.5rem 2rem' }}
            >
              {/* Category label */}
              <motion.div
                variants={staggerItem}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
              >
                <div
                  style={{
                    width: 4,
                    height: 24,
                    borderRadius: 2,
                    background: 'linear-gradient(to bottom, #FBBF24, #D97706)',
                  }}
                />
                <h3 style={{ fontWeight: 700, color: 'white', fontSize: '1.125rem' }}>
                  {category.label}
                </h3>
                <span style={{ color: '#475569', fontSize: '0.8rem', fontFamily: 'monospace' }}>
                  {category.skills.length} tools
                </span>
              </motion.div>

              {/* Skill badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
                {category.skills.map(skill => (
                  <SkillBadge key={skill.name} skill={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer comment */}
        <motion.p
          variants={fadeInUp}
          style={{ textAlign: 'center', color: '#475569', fontSize: '0.875rem', marginTop: '2rem', fontFamily: 'monospace' }}
        >
          {'// Terus belajar dan berkembang ✨'}
        </motion.p>
      </div>
    </SectionWrapper>
  )
}

export default Skills
