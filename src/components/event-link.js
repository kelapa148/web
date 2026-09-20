import React from "react"

const renderDescription = text => {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
  const html = escaped.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    (match, label, url) =>
      /^https?:\/\//.test(url)
        ? `<a href="${url}" target="_blank" rel="noopener noreferrer">${label}</a>`
        : `<a href="${url}">${label}</a>`
  )
  return { __html: html }
}

const EventLink = ({ event }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{event.year}</div>
      <div className="timeline-content">
        <h2 className="event-title">{event.title}</h2>
        <div className="event-meta">
          {event.date}
          {event.venue && (
            <>
              {" · "}
              <span className="event-venue">
                <svg
                  className="event-pin"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" />
                  <path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" />
                  <path d="M18 22v-3" />
                  <circle cx="10" cy="10" r="3" />
                </svg>
                {event.venue}
              </span>
            </>
          )}
        </div>
        <p
          className="event-description"
          dangerouslySetInnerHTML={renderDescription(event.description)}
        />
      </div>
    </div>
  )
}

export default EventLink
