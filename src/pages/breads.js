import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Breads = ({ data }) => (
  <Layout>
    <Head pageTitle={data.site.siteMetadata.breadsTitle} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.site.siteMetadata.siteDescription,
        }}
      />
    </Box>
  </Layout>
);

Breads.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Breads;

export const query = graphql`
query {
    site {
      siteMetadata {
        siteTitle
        siteTitleShort
        siteDescription
        siteUrl
        themeColor
        social {
          twitter
          fbAppId
        }
      }
    }
  }
`;
