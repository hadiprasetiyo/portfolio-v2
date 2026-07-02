import { Resend } from 'resend'

const isValidEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).trim().toLowerCase())

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed',
    })
  }

  const { name, email, subject, message, _gotcha } = req.body

  if (_gotcha) {
    return res.status(200).json({ success: true })
  }

  if (!name || name.trim().length < 3) {
    return res.status(422).json({ success: false, error: 'Nama minimal 3 karakter.' })
  }

  if (!email || !isValidEmail(email)) {
    return res.status(422).json({ success: false, error: 'Format email tidak valid.' })
  }

  if (!subject || !subject.trim()) {
    return res.status(422).json({ success: false, error: 'Subjek wajib diisi.' })
  }

  if (!message || message.trim().length < 20) {
    return res.status(422).json({ success: false, error: 'Pesan minimal 20 karakter.' })
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL) {
    return res.status(500).json({
      success: false,
      error: 'Konfigurasi email server belum lengkap.',
    })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)

    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_TO_EMAIL,
      subject: `[Portfolio] ${subject.trim()}`,
      replyTo: email.trim(),
      html: `
        <h2>Pesan Baru dari Portfolio</h2>
        <p><strong>Nama:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Subjek:</strong> ${subject.trim()}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message.trim()}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('[Contact API]', error)
    return res.status(500).json({
      success: false,
      error: 'Gagal mengirim pesan. Silakan coba lagi.',
    })
  }
}