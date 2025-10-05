export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card">
      <img
        src={`img1/${project.id}.jpg`}
        alt={project.title}
        className="project-image"
      />

      <div className="project-info">
        <h3 className="project-title" onClick={onClick}>
          {project.title}
        </h3>
        <p className="project-description" onClick={onClick}>
          {project.description}
        </p>

        <div className="project-tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-buttons">
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
