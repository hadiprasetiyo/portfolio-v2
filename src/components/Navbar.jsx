import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { navbarVariant, mobileMenuVariant, staggerItem, staggerContainer } from '../animations/variants'
import { navLinks } from '../constants'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [menuOpen, setMenuOpen] = useState(false)

  // Detect scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Detect active section
  useEffect(() => {
    const sections = navLinks.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return
    const close = (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#menu-toggle')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', close)
    return () => document.removeEventListener('mousedown', close)
  }, [menuOpen])

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }, [])

  return (
    <>
      <motion.nav
        variants={navbarVariant}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-slate-700/50 shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
          : 'bg-transparent'
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 group"
              aria-label="Go to top"
            >
              <div
                className="
                            p-[2px]
                            rounded-xl
                            bg-gradient-to-br
                            from-amber-400
                            via-amber-500
                            to-blue-500
                            shadow-[0_0_20px_rgba(245,158,11,0.15)]
                            group-hover:shadow-[0_0_25px_rgba(245,158,11,0.3)]
                            transition-all
                            duration-300
                          "
              >
                <img
                  src="/images/hadiprasetiyo.jpeg"
                  alt="Hadi Prasetiyo"
                  className="
                              w-8 h-8
                              rounded-[10px]
                              object-cover
                              bg-slate-900
                              group-hover:scale-105
                              transition-transform
                              duration-300
                            "
                />
              </div>

              <span className="font-semibold text-sm text-slate-300 group-hover:text-white transition-colors hidden sm:block">
                Hadi Prasetiyo
              </span>
            </button>

            {/* Desktop Nav */}
            <ul className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${activeSection === link.id
                      ? 'text-amber-400'
                      : 'text-slate-400 hover:text-slate-100'
                      }`}
                  >
                    {link.label}
                    {activeSection === link.id && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 bg-amber-500/10 rounded-lg border border-amber-500/20"
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Hire me CTA */}
            <button
              onClick={() => scrollTo('contact')}
              className="hidden md:flex btn-primary text-xs px-4 py-2 gap-1.5"
            >
              Hubungi Saya
            </button>

            {/* Mobile toggle */}
            <button
              id="menu-toggle"
              onClick={() => setMenuOpen(prev => !prev)}
              className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            variants={mobileMenuVariant}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed top-16 left-4 right-4 z-40 md:hidden
                       bg-navy-800/95 backdrop-blur-md rounded-2xl border border-slate-700/60
                       shadow-[0_20px_60px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            <motion.ul
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col p-4 gap-1"
            >
              {navLinks.map(link => (
                <motion.li key={link.id} variants={staggerItem}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${activeSection === link.id
                      ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                      : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <motion.li variants={staggerItem} className="pt-2">
                <button
                  onClick={() => scrollTo('contact')}
                  className="btn-primary w-full justify-center text-sm"
                >
                  Hubungi Saya
                </button>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
