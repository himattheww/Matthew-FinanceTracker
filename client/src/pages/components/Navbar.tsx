import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { SignedIn, UserButton } from "@clerk/clerk-react";
import logo from './Logoweb2.png';
import "./Navbar.css"

const Root = styled('div')({
  flexGrow: 1,
});

const Title = styled(Typography)({
  flexGrow: 1,
});

const Logo = styled('img')({
  height: 40,
  marginRight: 16,
});

const Navbar = styled(AppBar)({
  position: 'static',
  marginBottom: '16px',
});

const NavbarComponent: React.FC = () => {
  return (
    <Root>
      <Navbar>
        <Toolbar>
          <Logo src={logo} alt="logo" />
          <Title variant="h6">
            Mhion Finance Tracker
          </Title>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </Navbar>
    </Root>
  );
}

export default NavbarComponent;
