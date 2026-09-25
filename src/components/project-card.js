import React from "react"

const ProjectCard = ({ project }) => {
  const hasUrl = project.url && project.url !== "TBD" && project.url !== "#"
  const isTbd = (project.name || "") === "TBD"
  const statusClass =
    project.status === "active"
      ? "active"
      : project.status === "growth"
      ? "growth"
      : "inactive"

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
          <div className="project-name">
            <span className="project-label">Project name:</span>{" "}
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
          </div>
          <span className={"status-badge " + statusClass}>
            {isTbd ? "—" : project.status}
          </span>
        </div>
        <div className="project-desc">
          <span className="project-label">Description:</span> {project.description}
        </div>
        <div className="project-url">
          <span className="project-label">URL:</span>{" "}
          {hasUrl ? (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              {project.url.replace(/^https?:\/\//, "")}
            </a>
          ) : (
            "—"
          )}
        </div>
        <div className="project-year">
          <span className="project-label">Started:</span>{" "}
          {project.startYear && project.startYear !== "TBD"
            ? project.startYear
            : "—"}
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
