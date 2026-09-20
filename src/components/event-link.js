import React from "react"

const EventLink = ({ event }) => {
  const meta = [event.date, event.venue].filter(Boolean).join(" · ")

  return (
    <div className="timeline-item">
      <div className="timeline-year">{event.year}</div>
      <div className="timeline-content">
        <h2 className="event-title">{event.title}</h2>
        <div className="event-meta">{meta}</div>
        <p className="event-description">{event.description}</p>
      </div>
    </div>
  )
}

export default EventLink
