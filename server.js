import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { Resend } from 'resend'
import rateLimit from 'express-rate-limit'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const PORT = process.env.PORT || 3001
const isDev = process.env.NODE_ENV !== 'production'

// ─── Resend FROM address ──────────────────────────────────────────────────────
// `onboarding@resend.dev` is Resend's built-in test sender.
//  ⚠️  Restriction: emails sent from this address can ONLY be delivered to
//      the email address that owns the Resend account.
//  Use a verified domain sender for production / sending to other recipients.
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'

// ─── Middleware ───────────────────────────────────────────────────────────────
app.use(express.json())
app.use(cors({
  origin: isDev ? ['http://localhost:3000', 'http://localhost:5173'] : false,
  methods: ['POST'],
}))

// ─── Rate Limiter: max 5 requests per IP per 15 minutes ──────────────────────
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    error: 'Terlalu banyak permintaan. Silakan coba lagi dalam 15 menit.',
  },
})

// ─── Helpers ─────────────────────────────────────────────────────────────────
const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase())

// ─── POST /api/contact ───────────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const { name, email, subject, message, _gotcha } = req.body

  // Honeypot: silently accept but don't send
  if (_gotcha) {
    return res.status(200).json({ success: true })
  }

  // ── Validation ──────────────────────────────────────────────────────────────
  const errors = []

  if (!name || name.trim().length < 3)
    errors.push('Nama minimal 3 karakter.')
  if (!email || !isValidEmail(email))
    errors.push('Format email tidak valid.')
  if (!subject || subject.trim().length === 0)
    errors.push('Subjek wajib diisi.')
  if (!message || message.trim().length < 20)
    errors.push('Pesan minimal 20 karakter.')

  if (errors.length > 0) {
    return res.status(422).json({ success: false, error: errors.join(' ') })
  }

  // ── Config guard ────────────────────────────────────────────────────────────
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    console.error('[Contact API] Missing RESEND_API_KEY or CONTACT_TO_EMAIL in environment.')
    return res.status(500).json({
      success: false,
      error: 'Konfigurasi email server belum lengkap. Hubungi administrator.',
    })
  }

  // ── Send via Resend ─────────────────────────────────────────────────────────
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `[Portfolio] ${subject.trim()}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px">
          <h2 style="color:#1e293b;border-bottom:2px solid #f59e0b;padding-bottom:8px">
            Pesan Baru dari Portfolio
          </h2>
          <table style="width:100%;border-collapse:collapse;margin-top:16px">
            <tr>
              <td style="padding:8px 12px;background:#f8fafc;font-weight:600;width:100px;color:#475569">Nama</td>
              <td style="padding:8px 12px;color:#1e293b">${name.trim()}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;color:#475569">Email</td>
              <td style="padding:8px 12px;color:#1e293b">
                <a href="mailto:${email.trim()}" style="color:#3b82f6">${email.trim()}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 12px;background:#f8fafc;font-weight:600;color:#475569">Subjek</td>
              <td style="padding:8px 12px;color:#1e293b">${subject.trim()}</td>
            </tr>
            <tr>
              <td style="padding:8px 12px;font-weight:600;vertical-align:top;color:#475569">Pesan</td>
              <td style="padding:8px 12px;color:#1e293b;white-space:pre-wrap">${message.trim()}</td>
            </tr>
          </table>
          <p style="margin-top:24px;font-size:12px;color:#94a3b8">
            Dikirim dari form portfolio Hadi Prasetiyo
          </p>
        </div>
      `,
      replyTo: email.trim(),
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('[Contact API] Resend error:', err?.message ?? err)
    return res.status(500).json({
      success: false,
      error: 'Gagal mengirim pesan. Silakan coba lagi atau hubungi langsung via email.',
    })
  }
})

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/api/health', (_req, res) => res.json({ ok: true }))

// ─── Serve Vite build in production ──────────────────────────────────────────
if (!isDev) {
  const distDir = path.join(__dirname, 'dist')
  app.use(express.static(distDir))
  app.get('*', (_req, res) => res.sendFile(path.join(distDir, 'index.html')))
}

// ─── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`[server] API running on http://localhost:${PORT}`)
  if (isDev) {
    console.log('[server] Dev mode — CORS open for Vite dev server')
    if (FROM_EMAIL === 'onboarding@resend.dev') {
      console.log('[server] ⚠️  Using onboarding@resend.dev as sender.')
      console.log('[server]    Emails will ONLY be delivered to your Resend account email.')
      console.log(`[server]    Make sure CONTACT_TO_EMAIL matches your Resend account email.`)
    }
  }
})

export default app
