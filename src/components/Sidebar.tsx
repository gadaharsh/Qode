import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ScienceIcon from '@mui/icons-material/Science';
import ArchiveIcon from '@mui/icons-material/Archive';
import PeopleIcon from '@mui/icons-material/People';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;


type SidebarProps = {
  currentPage: string;
  setCurrentPage: (page: string) => void;
};

function Sidebar({ currentPage, setCurrentPage }: SidebarProps) {
  const menuItems = [
    { text: 'Home', icon: <HomeIcon /> },
    { text: 'Portfolios', icon: <AssessmentIcon /> },
    { text: 'Experimentals', icon: <ScienceIcon /> },
    { text: 'Slack Archives', icon: <ArchiveIcon /> },
    { text: 'Refer a friend', icon: <PeopleIcon /> },
    { text: 'Gift a subscription', icon: <CardGiftcardIcon /> },
    { text: 'Account', icon: <AccountCircleIcon /> },
  ];

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', borderRight: '1px solid #e0e0e0' },
      }}
    >
      {/* <Toolbar /> */}
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', mb : 2, mt: 2, ml: 2 }}>
            <Box sx={{ 
              width: 32, 
              height: 32, 
              backgroundColor: 'teal', 
              borderRadius: 1, 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              mr: 1 
            }}>
              <Typography variant="h6" component="span" sx={{ color: 'white', fontWeight: 'bold' }}>
                C
              </Typography>
            </Box>
            <Typography variant="h6" component="div">
              capitalmind
            </Typography>
          </Box>
          {menuItems.map((item) => {
            const isSelected = currentPage.toLowerCase() === item.text.toLowerCase();
            return (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  selected={isSelected}
                  onClick={() => setCurrentPage(item.text.toLowerCase())}
                  sx={{
                    backgroundColor: isSelected ? '#e0e0e0' : '#fff',
                    '&:hover': {
                      backgroundColor: isSelected ? '#e0e0e0' : '#f5f5f5',
                    },
                    borderRadius: 2,
                    mb: 1
                  }}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Box>
    </Drawer>
  );
}
export default Sidebar;