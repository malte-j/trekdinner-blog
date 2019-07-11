import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
   <Layout>
    <section>
      <h1>{ frontmatter.title }</h1>
      <h2>{ frontmatter.date} </h2>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </section>
   </Layout>
  )
}

export const pageQuery = graphql`
  query($id: String!) {
    markdownRemark(id:  { eq: $id } ) {
      html
      frontmatter {
        date(locale: "de", formatString: "DD MMMM, YYYY")
        title
      }
    }
  }`