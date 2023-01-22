import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import '../styles/layout.scss';

const ContactPage = ({ data }) => (
  <Layout>
    <h1 className="pageTitle">{data.markdownRemark.frontmatter.title}</h1>

    <section className="section">
      <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}></div>
    </section>

    {/* <section className="section">
      <div
        style={{ height: '60vh' }}
        dangerouslySetInnerHTML={{
          __html: data.markdownRemark.frontmatter.map,
        }}
      ></div>
    </section> */}
  </Layout>
);

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "contact-page" } }) {
      frontmatter {
        title
        map
      }
      html
    }
  }
`;

export default ContactPage;
