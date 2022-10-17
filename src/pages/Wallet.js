import React, { Component } from 'react';
import Layout from '../components/Layout';
import WalletForm from '../components/WalletForm';

class Wallet extends Component {
  render() {
    return (
      <Layout>
        <WalletForm />
      </Layout>
    );
  }
}

export default Wallet;
