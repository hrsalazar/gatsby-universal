import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/box';
import Head from 'components/head';

const Coffee = ({ data }) => (
  <Layout>
    <Head pageTitle={data.coffeeJson.title} />
    <Box>
      <div
        dangerouslySetInnerHTML={{
          __html: data.coffeeJson.content.childMarkdownRemark.html,
        }}
      />
    </Box>
  </Layout>
);

Coffee.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Coffee;

export const query = graphql`
  query CoffeeQuery {
    coffeeJson {
      title
      content {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;
