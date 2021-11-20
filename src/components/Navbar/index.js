import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

import './navbar.css';
import '../../fonts/fonts.css'

export default function ButtonAppBar() {

  return (
    <div className="navbar">
      <AppBar position="static">
        <div className="nav_name_container">
          <h1 className="nav_name">CammiAnn</h1>
        </div>
        <Toolbar className="navButtons">
          <Button href="/" color="inherit">Home</Button>
          {/* <div className="nav_divider"></div>
          <Button href="/about" color="inherit">About</Button> */}
          <div className="nav_divider"></div>
          <Button href="/blog" color="inherit">Blog</Button>
          <div className="nav_divider"></div>
          <Button href="/about" color="inherit">Products</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}