import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = ['About', 'Activities', 'Contact'];

function ResponsiveAppBar(props:any) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  console.log(anchorElNav);
  const { naviScroll } = props;
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (page: any) => {
    console.log(page);
    // eslint-disable-next-line react/prop-types
    naviScroll(page);
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        position: 'fixed',
        top: 0,
        zIndex: 5,
        bgcolor: '#faf0e6',
        height: '9vh',
      }}
    >
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
        >
          <Box sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'flex' },
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
          }}
          >
            {pages.map((page) => (
              <Button
                style={{ backgroundColor: 'transparent' }}
                disableElevation
                disableRipple
                key={page}
                onClick={() => handleCloseNavMenu(page)}
                sx={{
                  my: 2, color: 'black', display: 'block',
                }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
