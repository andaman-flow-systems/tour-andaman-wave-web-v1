'use client'

import { siteInfo } from '@/lib/siteData'
import { MessageCircle } from 'lucide-react'
import './WhatsAppButton.css'

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteInfo.whatsapp}?text=${encodeURIComponent('Hi! I would like to know more about your Phuket tours.')}`}
      target="_blank"
      rel="noreferrer"
      className="whatsapp-fab"
      aria-label="Chat with us on WhatsApp"
    >
      <MessageCircle size={32} color="#fff" />
    </a>
  )
}
