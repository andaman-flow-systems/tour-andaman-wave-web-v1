import { useState } from 'react'
import './FAQAccordion.css'

export default function FAQAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div className={`faq-item ${isOpen ? 'faq-item--open' : ''}`} key={item.q}>
            <button
              className="faq-item__question"
              onClick={() => setOpenIndex(isOpen ? -1 : i)}
              aria-expanded={isOpen}
            >
              {item.q}
              <span className="faq-item__icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && <div className="faq-item__answer"><p>{item.a}</p></div>}
          </div>
        )
      })}
    </div>
  )
}
