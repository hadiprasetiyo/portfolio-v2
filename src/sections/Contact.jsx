import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiLocationMarker, HiPaperAirplane, HiCheckCircle } from 'react-icons/hi'
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import SectionWrapper from '../components/SectionWrapper'
import { personalInfo } from '../constants'
import { fadeInUp, fadeInLeft, fadeInRight } from '../animations/variants'

// ─── Contact detail list ──────────────────────────────────────────────────────
const contactDetails = [
  {
    icon: HiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'text-amber-400',
    hoverColor: 'group-hover:text-amber-300',
    bg: 'bg-amber-500/10',
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: personalInfo.githubLabel,
    href: personalInfo.github,
    color: 'text-slate-300',
    hoverColor: 'group-hover:text-white',
    bg: 'bg-slate-500/10',
  },
  {
    icon: FaLinkedinIn,
    label: 'LinkedIn',
    value: personalInfo.linkedinLabel,
    href: personalInfo.linkedin,
    color: 'text-blue-400',
    hoverColor: 'group-hover:text-blue-300',
    bg: 'bg-blue-500/10',
  },
  {
    icon: FaInstagram,
    label: 'Instagram',
    value: personalInfo.instagramLabel,
    href: personalInfo.instagram,
    color: 'text-pink-400',
    hoverColor: 'group-hover:text-pink-300',
    bg: 'bg-pink-500/10',
  },
  {
    icon: HiLocationMarker,
    label: 'Lokasi',
    value: personalInfo.location,
    href: null,
    color: 'text-green-400',
    bg: 'bg-green-500/10',
  },
]

// ─── Input Field Component ────────────────────────────────────────────────────
const InputField = ({ label, id, type = 'text', placeholder, value, onChange, required, rows, hint }) => {
  const isTextarea = Boolean(rows)
  const Tag = isTextarea ? 'textarea' : 'input'

  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-400 uppercase tracking-wide">
        {label}{required && <span className="text-amber-500 ml-0.5">*</span>}
      </label>
      <Tag
        id={id}
        name={id}
        type={!isTextarea ? type : undefined}
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={id === 'email' ? 'email' : id === 'name' ? 'name' : 'off'}
        className="bg-navy-900/60 border border-slate-700/60 rounded-xl px-4 py-3
                   text-slate-200 placeholder-slate-600 text-sm
                   focus:outline-none focus:ring-2 focus:ring-amber-500/40 focus:border-amber-500/60
                   transition-all duration-200 resize-none font-sans"
      />
      {hint && <p className="text-xs text-slate-600">{hint}</p>}
    </div>
  )
}

// ─── Client-side validation ───────────────────────────────────────────────────
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim().toLowerCase())

const validate = ({ name, email, subject, message }) => {
  if (!name || name.trim().length < 3) return 'Nama minimal 3 karakter.'
  if (!email || !isValidEmail(email)) return 'Format email tidak valid.'
  if (!subject || !subject.trim()) return 'Subjek wajib diisi.'
  if (!message || message.trim().length < 20) return 'Pesan minimal 20 karakter.'
  return null
}

// ─── Contact Section ──────────────────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [honeypot, setHoneypot] = useState('')   // hidden field for bots
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    // Client-side validation
    const validationError = validate(form)
    if (validationError) {
      setError(validationError)
      return
    }

    setSending(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _gotcha: honeypot,           // honeypot — server ignores if filled
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Gagal mengirim pesan.')
      }

      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      setError(err.message || 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.')
    } finally {
      setSending(false)
    }
  }

  return (
    <SectionWrapper id="contact">
      <div className="max-w-6xl mx-auto">

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <p className="section-label mb-3">Contact</p>
          <h2 className="section-title">
            Get In <span className="text-gradient-amber">Touch</span>
          </h2>
          <div className="section-divider mx-auto mt-4" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Terbuka untuk berdiskusi, bertukar ide, maupun menjalin kolaborasi dalam pengembangan solusi digital yang inovatif.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Left — Info ────────────────────────────────────────────────── */}
          <motion.div variants={fadeInLeft} className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Terbuka untuk Berkolaborasi
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Saya senang berdiskusi mengenai pengembangan web, teknologi, maupun peluang kolaborasi dalam membangun solusi digital yang bermanfaat. Jangan ragu untuk menghubungi saya apabila Anda memiliki pertanyaan, ide, atau kesempatan untuk bekerja sama.
              </p>
            </div>

            {/* Contact detail items */}
            <div className="space-y-3">
              {contactDetails.map(item => {
                const IconComp = item.icon
                const content = (
                  <div className="flex items-center gap-4 p-4 glass-card
                                  hover:border-slate-600/70 transition-all duration-200 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${item.bg}`}>
                      <IconComp className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-slate-500 mb-0.5">{item.label}</p>
                      <p
                        className={`text-sm font-medium truncate text-slate-300 transition-colors ${item.href ? item.hoverColor : ''
                          }`}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
            </div>
          </motion.div>

          {/* ── Right — Form ───────────────────────────────────────────────── */}
          <motion.div variants={fadeInRight}>
            <div className="glass-card p-6 md:p-8">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-8 gap-4"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/30
                                  flex items-center justify-center">
                    <HiCheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Pesan Terkirim!</h4>
                  <p className="text-slate-400 text-sm">
                    Terima kasih telah menghubungi saya. Saya akan segera membalas pesan Anda.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="btn-secondary text-sm mt-2"
                  >
                    Kirim Pesan Lain
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <h3 className="text-lg font-bold text-white mb-1">Kirim Pesan</h3>
                  <p className="text-slate-500 text-xs mb-5">
                    Kolom bertanda <span className="text-amber-500">*</span> wajib diisi.
                  </p>

                  {/* ── Honeypot (hidden from humans, visible to bots) ── */}
                  <input
                    type="text"
                    name="_gotcha"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    aria-hidden="true"
                    autoComplete="off"
                    style={{ display: 'none' }}
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Nama"
                      id="name"
                      placeholder="Nama Lengkap"
                      value={form.name}
                      onChange={handleChange}
                      required
                      hint="Min. 3 karakter"
                    />
                    <InputField
                      label="Email"
                      id="email"
                      type="email"
                      placeholder="email@contoh.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <InputField
                    label="Subjek"
                    id="subject"
                    placeholder="Peluang Kerja / Kolaborasi Proyek"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />

                  <InputField
                    label="Pesan"
                    id="message"
                    placeholder="Halo Hadi, saya tertarik untuk..."
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    hint="Min. 20 karakter"
                  />

                  {/* ── Error message ── */}
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-400 text-xs bg-red-500/10 border border-red-500/20 px-4 py-2.5 rounded-xl"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={sending}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className="btn-primary w-full justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Mengirim...
                      </>
                    ) : (
                      <>
                        <HiPaperAirplane className="w-4 h-4" />
                        Kirim Pesan
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </SectionWrapper>
  )
}

export default Contact
