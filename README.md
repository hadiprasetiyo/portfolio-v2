# Hadi Prasetiyo — Personal Portfolio

Personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion, featuring a secure contact form backend built with Express and Resend.

## 🚀 Features

- **Responsive & Modern Design**: Optimized for mobile, tablet, and desktop screens with smooth animations (Framer Motion).
- **Interactive Experience Timeline**: Showcases career journey and education.
- **Certificates Viewer**: Centered card layout with an image preview lightbox.
- **Secure Contact Form**: Input validation, honeypot spam protection, rate-limiting, and Resend email integration.
- **Production Ready**: Completely pre-configured for seamless single-repository deployment on Vercel.

## 🛠️ Tech Stack

- **Frontend**: React (Vite), Tailwind CSS, Framer Motion, React Icons
- **Backend (API)**: Express.js, Resend (Email API), CORS, Express Rate Limit, Dotenv
- **Deployment**: Vercel (support for serverless functions)

---

## 💻 Local Development

### 1. Prerequisities

Make sure you have Node.js installed.

### 2. Installation

Clone this repository and install dependencies:

```bash
npm install
```

### 3. Environment Setup

Copy `.env.example` to `.env` at the root of the project:

```bash
cp .env.example .env
```

Open `.env` and configure your Resend credentials:

- `RESEND_API_KEY`: Get your free API key from [Resend](https://resend.com).
- `CONTACT_TO_EMAIL`: The target email where you want to receive contact form submissions.
- `CONTACT_FROM_EMAIL`: (Optional) Leave empty to use `onboarding@resend.dev` in development.

> ⚠️ **Note**: When using `onboarding@resend.dev`, emails can ONLY be sent to the email address that registered the Resend account. For production, verify a custom domain in Resend and set `CONTACT_FROM_EMAIL` to your custom domain address (e.g. `noreply@yourdomain.com`).

### 4. Running the Project

Start the Express API server:
```bash
npm run server
```

In another terminal, start the Vite development server:
```bash
npm run dev
```

Open `http://localhost:3000` to view the website. Requests to `/api/*` will automatically be proxied to the Express backend.

---

## 📦 Production Build

Build the static frontend assets:

```bash
npm run build
```

The compiled assets will be placed in the `dist/` directory.

To test the production build locally with the Express server serving the static files:

```bash
npm run start
```

---

## ☁️ Vercel Deployment

This project is configured to deploy the Vite frontend and Express backend together under a single domain on Vercel using `vercel.json`.

### Steps to Deploy:

1. Import this repository into Vercel.
2. Vercel will automatically detect the configuration from `vercel.json`.
3. Add the following **Environment Variables** in your Vercel Project Settings:
   - `RESEND_API_KEY` (Required)
   - `CONTACT_TO_EMAIL` (Required)
   - `CONTACT_FROM_EMAIL` (Required, must be verified domain sender in production)
   - `NODE_ENV` = `production`
4. Click **Deploy**. Vercel will build the frontend assets, host them statically, and map `/api/*` requests to the serverless function.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
