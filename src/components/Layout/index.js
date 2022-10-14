import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <main>{children}</main>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
