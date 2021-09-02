import React from 'react';
import { graphql } from 'gatsby';

import * as css from './index-page.module.scss';

import Layout from '../components/layout';
import logo from '../../static/logo.svg';
import Button from '../components/button';
import BlogPreview from '../components/blogPreview';

const IndexPage = ({ data }) => {
  const fm = data.markdownRemark.frontmatter;

  return (
    <Layout className={css.index} nav={{ chameleon: true }}>
      <header className={css.header}>
        <div className={css.placeholder}></div>

        <img className={css.logo} src={logo} alt="Trekdinner Oldenburg" />

        <Button type={['light']} to="/contact">
          {fm.cta}
        </Button>

        <svg
          className={css.wave}
          viewBox="0 0 411 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M205.5 12C325 -14 411 12 411 12V24H0V12C0 12 86 38 205.5 12Z"
            fill="white"
          />
        </svg>
      </header>

      <section className={css.about}>
        <h1>{fm.about.heading}</h1>
        <p>{fm.about.description}</p>
      </section>

      <section className={css.log}>
        <h1>{fm.postsName}</h1>
      </section>

      <BlogPreview />
      <Button to="/blog" type={['dark', 'centered']}>
        Alle Einträge anschauen
      </Button>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        cta
        about {
          heading
          description
        }
        postsName
      }
    }
  }
`;

export default IndexPage;
