import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <section className="hero-section">
      <h1 className="hero-title">
        Grigore Georgiana Alexandra – Inginer Software
      </h1>
      <p className="hero-subtitle">
        Transform idei complexe în soluții digitale curate, rapide și scalabile.
      </p>
      <a
        href="path/to/your/cv.pdf"
        className="hero-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Descarcă CV / Contact
      </a>
    </section>
  )
}

export default Hero
