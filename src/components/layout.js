import React from 'react';
import Helmet from 'react-helmet';
import '../styles/global.scss';
import { useStaticQuery, graphql } from 'gatsby';
import NavBar from './navBar';
import Footer from '../components/footer';

const Layout = ({ children, nav, className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  return (
    <div className={className || ''}>
      <Helmet>
        <title>{data.site.siteMetadata.title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* <link href="https://fonts.googleapis.com/css?family=Didact+Gothic|Open+Sans&display=swap" rel="stylesheet"/> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <NavBar {...nav} />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
