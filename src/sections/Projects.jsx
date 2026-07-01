import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiExternalLink, HiCode, HiChevronRight, HiStar } from 'react-icons/hi'
import { FaGithub } from 'react-icons/fa'
import SectionWrapper from '../components/SectionWrapper'
import { projects } from '../constants'
import { fadeInUp, staggerContainer, staggerItem, cardHover } from '../animations/variants'

const ProjectCard = ({ project, featured = false }) => (
  <motion.div
    variants={staggerItem}
    initial="rest"
    whileHover="hover"
    animate="rest"
  >
    <motion.div
      variants={cardHover}
      className={`glass-card overflow-hidden h-full flex flex-col group
                  ${featured ? 'ring-1 ring-amber-500/30' : ''}`}
    >
      {/* Project image / placeholder */}
      <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />

        {/* Center area — cover image or icon fallback */}
        <div className="absolute inset-0 flex items-center justify-center">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                // Fallback: hide broken img, show icon instead
                e.target.style.display = 'none'
                e.target.nextSibling.style.display = 'flex'
              }}
            />
          ) : null}
          <div
            className="w-20 h-20 rounded-2xl items-center justify-center
                        border border-white/10 backdrop-blur-sm"
            style={{
              background: `${project.accentColor}18`,
              display: project.image ? 'none' : 'flex',
            }}
          >
            <HiCode className="w-10 h-10" style={{ color: project.accentColor }} />
          </div>
        </div>

        {/* Featured badge */}
        {featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1
                           bg-amber-500/90 backdrop-blur-sm rounded-lg
                           text-xs font-bold text-navy-900">
            <HiStar className="w-3 h-3" />
            Featured
          </div>
        )}

        {/* Category badge */}
        <div className="absolute top-3 right-3 px-2.5 py-1 rounded-lg text-xs font-semibold
                         bg-navy-900/80 backdrop-blur-sm border border-slate-700/60 text-slate-300">
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6 flex flex-col flex-1">
        <h3 className="font-bold text-white text-lg mb-2 leading-snug group-hover:text-amber-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-5">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-slate-400">
              <HiChevronRight className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.tech.map(t => (
            <span
              key={t}
              className="text-xs px-2.5 py-1 rounded-md bg-navy-900/60 border border-slate-700/60
                         text-slate-400 font-mono"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2.5 mt-auto pt-4 border-t border-slate-700/40">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                       border border-slate-700/60 hover:border-amber-500/40
                       text-slate-400 hover:text-amber-400
                       bg-navy-900/40 hover:bg-amber-500/5
                       text-xs font-semibold transition-all duration-200"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                         border border-blue-500/40 hover:border-blue-400
                         text-blue-400 hover:text-blue-300
                         hover:bg-blue-500/10
                         text-xs font-semibold transition-all duration-200"
            >
              <HiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          ) : (
            <span
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl
                          border border-slate-700/30 text-slate-600 text-xs font-semibold cursor-not-allowed"
            >
              <HiExternalLink className="w-4 h-4" />
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  </motion.div>
)

const Projects = () => {
  return (
    <SectionWrapper id="projects">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">Portfolio</p>
          <h2 className="section-title">
            Highlight <span className="text-gradient-amber">Project</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Kumpulan project yang mencerminkan kemampuan saya dalam merancang dan mengembangkan aplikasi web modern.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {projects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              featured={project.featured}
            />
          ))}
        </motion.div>

        {/* More projects note */}
        <motion.div
          variants={fadeInUp}
          className="text-center mt-10"
        >
          <a
            href="https://github.com/hadiprasetiyo"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FaGithub className="w-4 h-4" />
            Lihat Semua di GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}

export default Projects
