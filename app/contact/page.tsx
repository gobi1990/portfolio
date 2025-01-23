'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-dark-primary">Contact Me</h1>
      <form onSubmit={handleSubmit} className="space-y-6 glass-effect p-8">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-dark-onBackground">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-dark-surface border-dark-primary text-dark-onBackground shadow-sm focus:border-dark-secondary focus:ring focus:ring-dark-secondary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-dark-onBackground">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-dark-surface border-dark-primary text-dark-onBackground shadow-sm focus:border-dark-secondary focus:ring focus:ring-dark-secondary focus:ring-opacity-50"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-dark-onBackground">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md bg-dark-surface border-dark-primary text-dark-onBackground shadow-sm focus:border-dark-secondary focus:ring focus:ring-dark-secondary focus:ring-opacity-50"
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-dark-onPrimary bg-dark-primary hover:bg-dark-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-secondary"
        >
          <Send  className="w-5 h-5 mr-2" />
          Send Message
        </button>
      </form>
    </div>
  )
}   