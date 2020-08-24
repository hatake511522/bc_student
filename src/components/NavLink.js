import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

class NavLink extends React.Component {
  render() {
    return (
      <AppBar position="relative">
        <Toolbar>
          <nav>
            <Link
              to='/'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography variant="h6" noWrap>
                Home
              </Typography>
            </Link>
            <Link
              to='/Registration'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              <Typography variant="h6" noWrap>
                データ登録
              </Typography>
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
    )
  }
}

export default NavLink;