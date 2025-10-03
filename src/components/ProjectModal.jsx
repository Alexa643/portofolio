import "./ProjectModal.css"

export default function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✖
        </button>
        <h2>{project.title}</h2>
        <p>
          {project.description} Aici ar trebui să adaugi o descriere mult mai
          lungă și tehnică despre soluțiile folosite, arhitectură și provocări.
        </p>

        <div className="gallery">
          {project.gallery?.map((img, i) => (
            <img
              key={i}
              src={`https://via.placeholder.com/600x350?text=Galeria+${i + 1}`}
              alt={`Imaginea ${i + 1} din proiect`}
              className="gallery-item"
            />
          ))}
        </div>

        <div className="links modal-links">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            style={{ marginRight: "15px" }}
          >
            Cod Sursă
          </a>
          <a href={project.demo} target="_blank" rel="noopener noreferrer">
            Demo Live
          </a>
        </div>
      </div>
    </div>
  )
}
