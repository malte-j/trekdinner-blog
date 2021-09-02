import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/layout.scss';

const ImprintPage = ({ data }) => (
  <Layout>
    <h1 className="pageTitle">{data.markdownRemark.frontmatter.title}</h1>

    <section className="section">
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </section>
  </Layout>
);

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "imprint-page" } }) {
      frontmatter {
        title
      }
      html
    }
  }
`;

export default ImprintPage;
