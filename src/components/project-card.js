import React from "react"

const ProjectCard = ({ project }) => {
  const hasUrl = project.url && project.url !== "TBD" && project.url !== "#"
  const isTbd = (project.name || "") === "TBD"

  return (
    <article className="project-card">
      {project.logo ? (
        <img
          className="project-logo"
          src={project.logo}
          alt={project.name + " logo"}
        />
      ) : (
        <div className="project-logo project-logo-placeholder" />
      )}
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-name">
            {hasUrl ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="post-link"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>
          <span
            className={
              "status-badge " + (project.status === "active" ? "active" : "inactive")
            }
          >
            {isTbd ? "—" : project.status}
          </span>
        </div>
        <p className="project-desc">{project.description}</p>
        {hasUrl && (
          <div className="project-url">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url.replace(/^https?:\/\//, "")}
            </a>
          </div>
        )}
        {project.startYear && project.startYear !== "TBD" && (
          <div className="project-year">
            Started: {project.startYear}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
