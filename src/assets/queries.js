import { graphql } from "gatsby"


export const ResumeInfo = graphql`
  Resume {
    {
    allPdf {
      edges {
        node {
          content
        }
      }
    }
  }
  }
