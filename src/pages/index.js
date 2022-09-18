import React from "react"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import HeroHeader from "../components/heroHeader"
import { useThemeContext } from "../contexts/theme-context";
import HelmetWrapper from "../components/helmetWrapper";

const IndexPage = ({
  data: {
    site: {
      siteMetadata: {
        title,
        description,
        home
      }
    },
  },
}) => {
  const { theme } = useThemeContext()

  const ResearchImages = home.research[theme].map((imgPath) => (
    <style type="text/css">
  .embed-container {
    height:0;
    margin-bottom:18px;
    overflow:hidden;
    padding-bottom:56.25%; /* 16/9 ratio */
    padding-top:30px; /* IE6 workaround*/
    position:relative;
  }

  .embed-container iframe,
  .embed-container object,
  .embed-container embed {
    height:100% !important;
    left:0;
    position:absolute;
    top:0;
    width:100% !important;
  }
</style>

<div class="embed-container"><object data={imgPath}></object>
</div>
      
  ))

  const FunderLogos = home.funder_logos[theme].map((imgPath) => (
    <div key={imgPath} className="image-container funder">
      <img src={imgPath} alt={imgPath} />
    </div>
  ))

  return (
    <Layout>
      <HelmetWrapper />
      <HeroHeader/>
      <h2>Research</h2>
      <div className="primary-content">
        {ResearchImages}
      </div>
      <h2>Funders</h2>
      <div className="primary-content">{home.funders}</div>
      <div className="grids outer-container small small-on-mobile">
        {FunderLogos}
      </div>
      <h2>Collaborators</h2>
      <div className="primary-content">{home.collaborators}</div>
      {/* <div className="grids 5">
        {Collaborator}
      </div> */}
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
        home {
          title
          description
          interests
          funders
          collaborators
          funder_logos {
            dark
            light
          }
          title
          research {
            dark
            light
          }
        }
      }
    }
  }
`
