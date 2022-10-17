import React, { Component } from 'react';
import Layout from '../components/Layout';
import WalletForm from '../components/WalletForm';
import WalletTable from '../components/WalletTable';

class Wallet extends Component {
  render() {
    return (
      <Layout>
        <WalletForm />
        <WalletTable />
      </Layout>
    );
  }
}

export default Wallet;
