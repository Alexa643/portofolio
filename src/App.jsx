import React from "react"
import Hero from "@/components/Hero.jsx"
import ProjectsGrid from "@/components/ProjectsGrid.jsx"
import "./App.css"
const App = () => {
  return (
    <div className="main-content">
      {/* 1. HERO Section */}
      <Hero />

      <ProjectsGrid />

      {/* 3. FOOTER */}
      <footer className="main-footer">
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/georgiana-alexandra-anghelescu242/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Alexa643"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Grigore Georgiana Alexandra. Toate
          drepturile rezervate.
        </p>
        <p style={{ marginTop: "5px" }}>
          Contact: anghelescugeorgiana242@gmail.com
        </p>
      </footer>
    </div>
  )
}

export default App
