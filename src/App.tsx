import React from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';

function App() {
  const [currentPage, setCurrentPage] = React.useState('home');

  let pageComponent;
  switch (currentPage) {
    case 'home':
      pageComponent = <HomePage />;
      break;
    case 'portfolios':
      pageComponent = <PortfolioPage />;
      break;
    default:
      pageComponent = <HomePage />;
  }
  return (
    <Layout currentPage={currentPage} setCurrentPage={setCurrentPage}>
      {pageComponent}
    </Layout>
  );
}

export default App;