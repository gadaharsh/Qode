// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';

// type HeaderProps = {
//   currentPage: string;
//   setCurrentPage: (page: string) => void;
// };

// const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => (
//   <AppBar 
//     position="fixed" 
//     sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'white', color: 'black' }}
//     elevation={1}
//   >
//     <Toolbar>
//       <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//          <Box sx={{ 
//             width: 32, 
//             height: 32, 
//             backgroundColor: 'teal', 
//             borderRadius: 1, 
//             display: 'flex', 
//             alignItems: 'center', 
//             justifyContent: 'center', 
//             mr: 1 
//           }}>
//           <Typography variant="h6" component="span" sx={{ color: 'white', fontWeight: 'bold' }}>
//             C
//           </Typography>
//         </Box>
//         <Typography variant="h6" component="div">
//           capitalmind
//         </Typography>
//       </Box>

//       <Box>
//         <Button 
//           onClick={() => setCurrentPage('home')}
//           color="inherit"
//           variant={currentPage === 'home' ? 'outlined' : 'text'}
//         >
//           Home
//         </Button>
//         <Button 
//           onClick={() => setCurrentPage('portfolios')}
//           color="inherit"
//           variant={currentPage === 'portfolios' ? 'outlined' : 'text'}
//           sx={{ ml: 2 }}
//         >
//           Portfolios
//         </Button>
//       </Box>
//     </Toolbar>
//   </AppBar>
// );

// export default Header;