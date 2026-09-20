import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import EventLink from "../components/event-link"
import HelmetWrapper from "../components/helmetWrapper"

const EventPage = ({
  data: {
    allEventsYaml: { edges },
  }
}) => {

  const Events = edges
    .filter(edge => !!edge.node.title)
    .map(edge => <EventLink key={edge.node.id} event={edge.node} />)

  return (
    <Layout>
      <HelmetWrapper
        title="Events"
      />
      <h1>Events</h1>
      <div className="primary-content">
        A timeline of events that COCONUT Computer Club has organized or
        taken part in over the years.
      </div>
      <div className="timeline">
        {Events}
      </div>
    </Layout>
  )
}

export default EventPage
export const pageQuery = graphql`
  query eventPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allEventsYaml(sort: {order: DESC, fields: [year]}) {
      edges {
        node {
          id
          title
          year
          date
          venue
          description
          url
        }
      }
    }
  }
`
