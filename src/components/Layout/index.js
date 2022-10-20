import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header';

import * as S from './styled';

class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <>
        <Header />
        <S.MainWrapper>{children}</S.MainWrapper>
      </>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
