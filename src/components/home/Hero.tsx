/* eslint-disable react-hooks/purity */
'use client'

import { useRef, useMemo } from 'react'
import Link from 'next/link'
import { Canvas, useFrame } from '@react-three/fiber'
import { siteInfo } from '@/lib/siteData'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import * as THREE from 'three'
import './Hero.css'

/* Lightweight floating dust particles — zero lag */
function Particles({ count = 300 }) {
  const meshRef = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    const colorOptions = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#fbbf24'),
      new THREE.Color('#22d3ee'),
    ]

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 30
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
      sizes[i] = Math.random() * 0.08 + 0.02
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1
    }
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <Particles />
    </>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    tl.from('.hero__badge', { y: -20, opacity: 0, duration: 0.8 })
      .from('.hero h1', { y: 40, opacity: 0, duration: 1.2 }, '-=0.5')
      .from('.hero__subtitle', { y: 25, opacity: 0, duration: 0.9 }, '-=0.7')
      .from('.hero__search', { y: 30, opacity: 0, scale: 0.96, duration: 0.9, ease: 'back.out(1.4)' }, '-=0.5')
      .from('.hero__cta-row', { y: 20, opacity: 0, duration: 0.8 }, '-=0.5')
      .from('.hero__stats li', { y: 20, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.4')
  }, { scope: heroRef })

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero__bg-image">
        <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=2500&auto=format&fit=crop" alt="Luxury yacht in tropical ocean" loading="eager" />
      </div>
      <div className="hero__canvas-container">
        <Canvas camera={{ position: [0, 0, 12], fov: 50 }} dpr={[1, 1.5]}>
          <Scene />
        </Canvas>
      </div>
      <div className="hero__gradient" aria-hidden="true" />
      <div className="container hero__inner">
        <span className="badge hero__badge">★ {siteInfo.rating}/5 — Trusted by {siteInfo.happyGuests} travelers</span>
        <h1>Discover Paradise,<br /><em>Your Way</em></h1>
        <p className="hero__subtitle">
          Crystal waters, hidden islands, and unforgettable sunsets await. We craft bespoke
          tropical experiences with personal guides, premium comfort, and seamless booking.
        </p>

        <form className="hero__search" onSubmit={(e) => e.preventDefault()}>
          <div className="hero__search-field">
            <label htmlFor="hero-category">Experience</label>
            <select id="hero-category">
              <option>Island Hopping</option>
              <option>Sunset Cruises</option>
              <option>Snorkeling & Diving</option>
              <option>Cultural Tours</option>
              <option>Jungle Adventures</option>
              <option>Private Yacht</option>
            </select>
          </div>
          <div className="hero__search-field">
            <label htmlFor="hero-guests">Guests</label>
            <select id="hero-guests">
              <option>1-2 Guests</option>
              <option>3-5 Guests</option>
              <option>6-10 Guests</option>
              <option>10+ Group</option>
            </select>
          </div>
          <div className="hero__search-field">
            <label htmlFor="hero-date">Travel Date</label>
            <input id="hero-date" type="date" />
          </div>
          <Link href="/tours" className="btn btn-primary hero__search-btn">
            Search
          </Link>
        </form>

        <div className="hero__cta-row">
          <Link href="/booking" className="btn btn-primary">
            Book Your Escape
          </Link>
          <Link href="/tours" className="btn btn-outline">
            Explore Experiences
          </Link>
        </div>

        <ul className="hero__stats">
          <li><strong>{siteInfo.toursCompleted}</strong><span>Tours Completed</span></li>
          <li><strong>{siteInfo.happyGuests}</strong><span>Happy Travelers</span></li>
          <li><strong>{siteInfo.rating}/5</strong><span>Average Rating</span></li>
          <li><strong>Since {siteInfo.founded}</strong><span>Local Experts</span></li>
        </ul>
      </div>
    </section>
  )
}
