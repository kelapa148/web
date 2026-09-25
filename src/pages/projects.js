import React, { useRef, useState } from "react"
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
  const tabsRef = useRef(null)

  const activeCategory = categories.find(cat => cat.category === active)

  const sortByNewestYear = projects =>
    [...projects].sort((a, b) => {
      const ay = parseInt(a.startYear, 10)
      const by = parseInt(b.startYear, 10)
      return (Number.isNaN(by) ? -1 : by) - (Number.isNaN(ay) ? -1 : ay)
    })

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
      <div className="project-tabs-wrapper">
        <div className="project-tabs" role="tablist" ref={tabsRef}>
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
        <span
          className="project-tabs-more"
          aria-hidden="true"
          onClick={() => {
            if (tabsRef.current) {
              tabsRef.current.scrollBy({ left: 250, behavior: "smooth" })
            }
          }}
        >
          ›
        </span>
      </div>
      {activeCategory && activeCategory.description && (
        <p className="project-category-desc">{activeCategory.description}</p>
      )}
      {activeCategory && (
        <div className="project-list">
          {sortByNewestYear(activeCategory.projects)
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
          description
          projects {
            name
            logo
            description
            url
            status
            startYear
          }
        }
      }
    }
  }
`
