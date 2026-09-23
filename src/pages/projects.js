import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import HelmetWrapper from "../components/helmetWrapper"

const ProjectsPage = ({
  data: {
    allProjectsYaml: { edges },
  }
}) => {

  const Categories = edges
    .filter(edge => !!edge.node.category)
    .map(edge => (
      <section key={edge.node.id} className="project-category">
        <h2>{edge.node.category}</h2>
        <div className="grids">
          {edge.node.projects
            .filter(project => !!project.name)
            .map(project => (
              <ProjectCard
                key={project.name + project.description}
                project={project}
              />
            ))}
        </div>
      </section>
    ))

  return (
    <Layout>
      <HelmetWrapper
        title="Projects"
        description="Research and development projects by COCONUT Computer Club across finance, energy, health, education, and infrastructure & security."
        slug="/projects"
      />
      <h1>Projects</h1>
      <div className="primary-content">
        Projects that COCONUT Computer Club builds and maintains across five
        focus areas: Finance, Energy, Health, Education, and Infrastructure
        &amp; Security.
      </div>
      {Categories}
    </Layout>
  )
}

export default ProjectsPage
export const pageQuery = graphql`
  query projectsPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allProjectsYaml {
      edges {
        node {
          id
          category
          projects {
            name
            logo
            description
            url
            status
          }
        }
      }
    }
  }
`
