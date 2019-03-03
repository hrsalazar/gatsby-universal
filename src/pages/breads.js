import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Breads = ({ data }) => (
  <Layout>
    <Head pageTitle={data.breadsJson.title} />
    <Box>
        <div
            dangerouslySetInnerHTML={{
            __html: data.breadsJson.content.childMarkdownRemark.html,
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
  query BreadsQuery {
    breadsJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
