import React from "react"

const PublicationModal = ({ publication, onClose }) => {
  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Publication abstract"
    >
      <div className="modal-card" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h2 className="modal-title">{publication.title}</h2>
        <div className="modal-meta">
          {publication.authors}
          {publication.journal ? ` · ${publication.journal}` : ""}
          {publication.year ? `, ${publication.year}` : ""}
        </div>
        <h3 className="modal-abstract-label">Abstract</h3>
        <p className="modal-abstract">
          {publication.abstract ||
            "Abstract is not available for this publication."}
        </p>
        <div className="modal-actions">
          <a
            className="button -primary"
            href={publication.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Detail Paper
          </a>
        </div>
      </div>
    </div>
  )
}

export default PublicationModal
