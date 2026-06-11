'use client'

import { useState, type MouseEvent } from 'react'
import './Gallery.css'

interface GalleryProps {
  images: string[]
  title: string
}

export default function Gallery({ images, title }: GalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const close = () => setActiveIndex(null)
  const showPrev = (e: MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((i) => ((i ?? 0) - 1 + images.length) % images.length)
  }
  const showNext = (e: MouseEvent) => {
    e.stopPropagation()
    setActiveIndex((i) => ((i ?? 0) + 1) % images.length)
  }

  return (
    <div className="gallery">
      <div className="gallery__grid">
        {images.map((src, i) => (
          <button key={src} type="button" className="gallery__item" onClick={() => setActiveIndex(i)}>
            <img src={src} alt={`${title} photo ${i + 1}`} loading="lazy" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="gallery__lightbox" onClick={close} role="dialog" aria-modal="true">
          <button className="gallery__close" onClick={close} aria-label="Close gallery">✕</button>
          <button className="gallery__nav gallery__nav--prev" onClick={showPrev} aria-label="Previous photo">‹</button>
          <img src={images[activeIndex]} alt={`${title} photo ${activeIndex + 1}`} onClick={(e) => e.stopPropagation()} />
          <button className="gallery__nav gallery__nav--next" onClick={showNext} aria-label="Next photo">›</button>
        </div>
      )}
    </div>
  )
}
