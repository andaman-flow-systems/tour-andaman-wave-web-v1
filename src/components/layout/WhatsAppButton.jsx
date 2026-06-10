import { siteInfo } from '../../services/siteData'
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
      💬
    </a>
  )
}
