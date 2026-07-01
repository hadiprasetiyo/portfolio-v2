import { motion } from 'framer-motion'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiHeart, HiCode } from 'react-icons/hi'
import { personalInfo, navLinks } from '../constants'
import { fadeInUp } from '../animations/variants'

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-navy-950/60 border-t border-slate-800/60">
      {/* Top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px
                      bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-3 gap-10 items-start"
        >
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="
      p-[2px]
      rounded-xl
      bg-gradient-to-br
      from-amber-400
      via-amber-500
      to-blue-500
    "
              >
                <img
                  src="/images/hadiprasetiyo.jpeg"
                  alt="Hadi Prasetiyo"
                  className="
        w-9 h-9
        rounded-[10px]
        object-cover
        bg-slate-900
      "
                />
              </div>

              <div>
                <p className="font-bold text-white leading-none">
                  Hadi Prasetiyo
                </p>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              Mengembangkan aplikasi web yang fungsional, terstruktur, dan berorientasi pada kebutuhan pengguna.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-xl border border-slate-700/60 flex items-center justify-center
                           text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/5
                           transition-all duration-200"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl border border-slate-700/60 flex items-center justify-center
                           text-slate-400 hover:text-blue-400 hover:border-blue-500/40 hover:bg-blue-500/5
                           transition-all duration-200"
              >
                <FaLinkedinIn className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Navigasi</h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
              {navLinks.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-sm text-slate-500 hover:text-amber-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact snippet */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Hubungi</h4>
            <div className="space-y-2">
              <p className="text-slate-500 text-sm">{personalInfo.email}</p>
              <p className="text-slate-500 text-sm">{personalInfo.location}</p>
              <button
                onClick={() => scrollTo('contact')}
                className="mt-3 text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors
                           flex items-center gap-1"
              >
                Kirim Pesan →
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row
                        items-center justify-between gap-3">
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            <HiCode className="w-3.5 h-3.5" />
            Built with React, Vite, Tailwind & Framer Motion
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            © {new Date().getFullYear()} Hadi Prasetiyo. Made with
            <HiHeart className="w-3.5 h-3.5 text-red-400" />
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
