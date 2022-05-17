import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useSession, useState } from "next-auth/react";
import Link from 'next/link'
import { Grid } from '@mui/material';
import Lottie from 'react-lottie'
import coin from '/public/lotties/coin';
import Image from 'next/image';

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const { data: session, status } = useSession();

  function detectMob() {
    return ( ( window.innerWidth <= 800 ) && ( window.innerHeight <= 1000 ) );
  }
  const isMobile = detectMob()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  let pages = [
    {
      "name": "Learn",
      "link": "/learn"
    },
    {
      "name": "Q&A",
      "link": "/q&a"
    },
    {
      "name":"About Us",
      "link":"/aboutUs"
    },
    
   
  ];
  let settings = [
    {
      "name": "Sign in",
      "link": "/api/auth/signin"
    }];
  let user = {
    "name": "",
    "img": ""
  }

  if (status === "authenticated") {

  

    settings = [
    {
      "name": "Profile",
      "link": "/profile"
    },
    {
      "name": "Sign out",
      "link": "/api/auth/signout"
    },
    
  ]
    user = {
      "name": "",
      "img": session.user.image
    }



    if (session.role==="admin") {
      pages.push(
        {
          "name": "Admin",
          "link": "/admin"
        },
      )
    }
    
    if (session.role==="specialist") {
      pages.push(
        {
          "name": "Domain Reviews",
          "link": "/domainReview"
        },
      )
    }
      
  }

  return (
    
    <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>

          
        <Link href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, ml:{md:2} }}
          >
            SourceVerse
          </Typography>
        </Link>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <Link key={page.name} href={page.link}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link href="/">
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, ml:{xs:1} }}
          >
            SourceVerse
          </Typography>
          </Link>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href={page.link} key={page.name}>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
              </Link>
            ))}
             
          </Box>


          <Box sx={{ flexGrow: 0 }}>
            
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {session ? <Avatar alt={user.name} src={user.img} /> : <Avatar sx={{ bgcolor: "#ffffff" }} /> }
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <Link key={setting.name} href={setting.link}>
                <MenuItem onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting.name}</Typography>
                </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
         
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
