import React, { useState } from "react"
import "./ProjectsGrid.css"
import ProjectModal from "@/components/ProjectModal.jsx"

const ALL_PROJECTS = [
  {
    id: 1,
    title: "E-commerce React",
    type: "Frontend",
    description: "Magazin online complet responsive.",
    tags: ["React", "Redux"],
    repo: "#",
    demo: "#",
    gallery: ["img1", "img2"],
  },
  {
    id: 2,
    title: "API RESTful Node",
    type: "Backend",
    description: "API rapid și securizat pentru date.",
    tags: ["Node.js", "Express"],
    repo: "#",
    demo: "#",
    gallery: ["img3", "img4"],
  },
  {
    id: 3,
    title: "Website Prezentare",
    type: "Design",
    description: "Design modern și animații CSS.",
    tags: ["HTML", "SASS"],
    repo: "#",
    demo: "#",
    gallery: ["img5"],
  },
  {
    id: 4,
    title: "Aplicație Mobile PWA",
    type: "Frontend",
    description: "Aplicație progresivă pentru gestionarea timpului.",
    tags: ["PWA", "Firebase"],
    repo: "#",
    demo: "#",
    gallery: ["img6"],
  },
  {
    id: 5,
    title: "Sistem de Autentificare",
    type: "Backend",
    description: "Implementare Auth2 cu Node.js.",
    tags: ["Passport", "JWT"],
    repo: "#",
    demo: "#",
    gallery: ["img7"],
  },
  {
    id: 6,
    title: "Dashboard Analitic",
    type: "Frontend",
    description: "Vizualizare de date în timp real.",
    tags: ["D3.js", "React"],
    repo: "#",
    demo: "#",
    gallery: ["img8"],
  },
]

const PROJECTS_PER_LOAD = 3

const ProjectCard = ({ project, onClick, viewType }) => {
  const isList = viewType === "list"

  return (
    <div
      className={`project-card ${isList ? "list-view" : "grid-view"}`}
      onClick={onClick}
    >
      <img
        src={`img1/${
          isList ? "150x150" : "320x200"
        }?text=${project.title.replace(/\s/g, "+")}`}
        alt={project.title}
        className="project-image"
      />
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-buttons" onClick={(e) => e.stopPropagation()}>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
          <a href={project.repo} target="_blank" rel="noopener noreferrer">
            Repo
          </a>
        </div>
      </div>
    </div>
  )
}

const ProjectsGrid = () => {
  const [filter, setFilter] = useState("Toate")
  const [visibleProjects, setVisibleProjects] = useState(PROJECTS_PER_LOAD)
  const [selectedProject, setSelectedProject] = useState(null)
  const [viewType, setViewType] = useState("grid")

  const availableFilters = [
    "Toate",
    ...new Set(ALL_PROJECTS.map((p) => p.type)),
  ]

  const filteredProjects = ALL_PROJECTS.filter((p) =>
    filter === "Toate" ? true : p.type === filter
  )

  const projectsToDisplay = filteredProjects.slice(0, visibleProjects)
  const totalFilteredProjects = filteredProjects.length

  const handleLoadMore = () => {
    setVisibleProjects((prev) => prev + PROJECTS_PER_LOAD)
  }

  const handleOpenModal = (project) => {
    setSelectedProject(project)
  }

  const handleCloseModal = () => {
    setSelectedProject(null)
  }

  return (
    <section>
      <h2>Portofoliu de Proiecte</h2>

      <div className="controls">
        <div className="filter-group">
          {availableFilters.map((f) => (
            <button
              key={f}
              className={`filter-button ${filter === f ? "active" : ""}`}
              onClick={() => {
                setFilter(f)
                setVisibleProjects(PROJECTS_PER_LOAD)
              }}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="toggle-group">
          <button
            className={`toggle-button ${viewType === "grid" ? "active" : ""}`}
            onClick={() => setViewType("grid")}
          >
            Grid
          </button>
          <button
            className={`toggle-button ${viewType === "list" ? "active" : ""}`}
            onClick={() => setViewType("list")}
          >
            Listă
          </button>
        </div>
      </div>
      <div
        className={`projects-grid-container ${
          viewType === "list" ? "list-mode" : ""
        }`}
      >
        {projectsToDisplay.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleOpenModal(project)}
            viewType={viewType}
          />
        ))}
      </div>

      {visibleProjects < totalFilteredProjects && (
        <button className="load-more-button" onClick={handleLoadMore}>
          Încarcă Mai Mult ({totalFilteredProjects - visibleProjects} rămase)
        </button>
      )}

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </section>
  )
}

export default ProjectsGrid
