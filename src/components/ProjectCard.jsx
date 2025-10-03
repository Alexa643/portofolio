import ProjectCard from "./ProjectCard"
import "./ProjectsGrid.css"

export default function ProjectsGrid({ projects, view, onSelect }) {
  return (
    <div className={view === "grid" ? "grid" : "list"}>
      {projects.map((p) => (
        <ProjectCard key={p.id} project={p} onClick={() => onSelect(p)} />
      ))}
    </div>
  )
}
