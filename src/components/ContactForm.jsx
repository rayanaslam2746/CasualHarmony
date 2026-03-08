import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const submit = async (event) => {
    event.preventDefault()
    setStatus('sending')
    setError('')

    if (!serviceId || !templateId || !publicKey) {
      setError('Email service is not configured. Please set environment variables.')
      setStatus('error')
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      setStatus('sent')
    } catch (e) {
      console.error(e)
      setError('Something went wrong while sending your message. Please try again.')
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="overflow-hidden bg-black py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="flex flex-col gap-4 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Book Casual Harmony
          </h2>
          <p className="mx-auto max-w-2xl text-base text-white/70">
            Fill out the form below and we’ll follow up with availability and pricing.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
          className="mx-auto mt-10 max-w-3xl"
        >
          <form
            ref={formRef}
            onSubmit={submit}
            className="grid gap-4 rounded-none border border-white/10 bg-white/5 p-8 shadow-glow"
          >
            <label className="flex flex-col gap-2 text-sm font-semibold text-white">
              Name
              <input
                name="from_name"
                required
                className="rounded-none border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-brand-500"
                placeholder="Your name"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-white">
              Email
              <input
                name="reply_to"
                type="email"
                required
                className="rounded-none border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-brand-500"
                placeholder="you@example.com"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-white">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="resize-none rounded-none border border-white/10 bg-black/50 px-4 py-3 text-white outline-none transition focus:border-brand-500"
                placeholder="Tell us about your event and dates."
              />
            </label>

            {status === 'sent' ? (
              <div className="rounded-none border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-50">
                Your message has been sent. We will respond shortly.
              </div>
            ) : null}
            {status === 'error' && (
              <div className="rounded-none border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-50">
                {error || 'Something went wrong.'}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              className="inline-flex items-center justify-center rounded-none border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
