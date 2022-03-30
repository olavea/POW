import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({
  location,
  title,
  description,
  author,
  type,
  robots,
  lang,
  children,
}) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            name
            url
            deployUrl
            twitterCreator
            twitterSite
          }
        }
      }
    `
  );

  const url = `${siteMetadata.deployUrl}${location.pathname}`;
  const canonical = location && `${siteMetadata.url}${location.pathname}`;
  const siteName = siteMetadata.name;
  const pageLang = lang || "en";
  const pageRobots = robots || "index";
  const socialTitle = title;
  const socialType = type || "website";
  const socialImage = `${siteMetadata.deployUrl}/.netlify/functions/social-image/?url=${url}`;
  const socialDescription = description;
  const twitterSite = siteMetadata.twitterSite;
  const twitterCreator = author || siteMetadata.twitterCreator;
  const twitterCard = "summary";

  return (
    <Helmet>
      <title>{title}</title>

      <html lang={pageLang} />
      <meta charSet="utf-8" />

      <link rel="canonical" href={canonical} />

      <meta name="description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={socialType} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={socialImage} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:creator" content={twitterCreator} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image:src" content={socialImage} />

      <meta name="robots" content={pageRobots} />

      {children}
    </Helmet>
  );
};

export default Seo;
