import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Box } from 'rebass/styled-components';

const DefaultLayout = ({ title, children }) => (
  <>
    <Head>
      <title>{title} | Paul Jaworski</title>
      <meta
        name="description"
        content="Paul Jaworski is a front-end/growth engineer based in San Francisco, CA."
      />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/ixa8hhb.css" />
    </Head>
    <Box as="main" minWidth="auto" mt={[3, 4, 4, 5]} mx={[4, 5]}>
      {children}
    </Box>
  </>
);

DefaultLayout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
