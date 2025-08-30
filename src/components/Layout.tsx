import React from 'react';
import Sidebar from './Sidebar';
import Box from '@mui/material/Box';

type LayoutProps = {
  children: React.ReactNode;
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

function Layout({ children, currentPage, setCurrentPage }: LayoutProps) {
  return (
    <Box sx={{ display: 'flex', backgroundColor: '#f5f5f5', alignItems: 'flex-start' }}>
      {/* <Header currentPage={currentPage} setCurrentPage={setCurrentPage} /> */}
      <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Box component="main" sx={{ flexGrow: 1, p: 0, m: 0 }} >
        {children}
      </Box>
    </Box>
  );
}

export default Layout;