import React from 'react';
import Routes from './routes/Routes';
import Navbar from './components/header/Navbar';
import Toolbar from './components/header/Toolbar';
import Footer from './components/footer/Footer';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Navbar />
      <Toolbar />
      <Routes />
      <Footer />
    </Layout>
  );
}

export default App;
