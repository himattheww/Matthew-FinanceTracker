import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { SignedIn, UserButton } from "@clerk/clerk-react";
import logo from './Logoweb2.png';


const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const Logo = styled('img')({
    height: 40, // Sesuaikan ukuran logo
    marginRight: 16,
  });

const Navbar: React.FC = () => {
  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
            <Logo src={logo} alt="logo" />
          
          <Title variant="h6">
            Mhion Finance Tracker
          </Title>
          <SignedIn>
            <UserButton/>
          </SignedIn>

        </Toolbar>
      </AppBar>
    </Root>
  );
}

export default Navbar;
