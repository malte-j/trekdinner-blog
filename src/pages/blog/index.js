import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import * as css from './index.module.scss';
import Img from 'gatsby-image';

import Layout from '../../components/layout';

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              featuredimage {
                childImageSharp {
                  fluid(maxWidth: 900) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <div>
        <h1 className={css.title}>Captain's Log</h1>

        <div className={css.posts}>
          {edges.map(({ node }) => (
            <div className={css.inside} key={node.fields.slug}>
              <Link className={css.thumbnail} to={node.fields.slug}>
                <Img
                  fluid={node.frontmatter.featuredimage.childImageSharp.fluid}
                  className={css.thumbnail}
                />
              </Link>
              <Link className={css.title} to={node.fields.slug}>
                {' '}
                {node.frontmatter.title}{' '}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
