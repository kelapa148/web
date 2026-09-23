import React, { useState } from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import ProjectCard from "../components/project-card"
import HelmetWrapper from "../components/helmetWrapper"

const ProjectsPage = ({
  data: {
    allProjectsYaml: { edges },
  }
}) => {

  const categories = edges
    .filter(edge => !!edge.node.category)
    .map(edge => edge.node)

  const [active, setActive] = useState(categories.length ? categories[0].category : "")

  const activeCategory = categories.find(cat => cat.category === active)

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
      <div className="project-tabs" role="tablist">
        {categories.map(cat => (
          <button
            key={cat.id}
            role="tab"
            aria-selected={cat.category === active}
            className={"project-tab" + (cat.category === active ? " active" : "")}
            onClick={() => setActive(cat.category)}
          >
            {cat.category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <div className="grids" style={{ marginTop: 24 }}>
          {activeCategory.projects
            .filter(project => !!project.name)
            .map(project => (
              <ProjectCard
                key={project.name + project.description}
                project={project}
              />
            ))}
        </div>
      )}
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
