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
  const meta = [event.date, event.venue].filter(Boolean).join(" · ")

  return (
    <div className="timeline-item">
      <div className="timeline-year">{event.year}</div>
      <div className="timeline-content">
        <h2 className="event-title">{event.title}</h2>
        <div className="event-meta">{meta}</div>
        <p
          className="event-description"
          dangerouslySetInnerHTML={renderDescription(event.description)}
        />
      </div>
    </div>
  )
}

export default EventLink
