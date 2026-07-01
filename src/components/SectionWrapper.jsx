import { motion } from 'framer-motion'
import { sectionReveal } from '../animations/variants'

/**
 * Wraps a section with viewport-triggered reveal animation.
 */
const SectionWrapper = ({ children, id, className = '', style = {} }) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-80px' }}
    variants={sectionReveal}
    className={`relative ${className}`}
    style={{ paddingTop: '5rem', paddingBottom: '5rem', paddingLeft: '1rem', paddingRight: '1rem', ...style }}
  >
    {children}
  </motion.section>
)

export default SectionWrapper
