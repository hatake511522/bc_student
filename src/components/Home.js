import React from 'react';
import logo from '../images/myid.png';
import NavLink from './NavLink';
import Grid from '@material-ui/core/Grid';

class Home extends React.Component {
  render() {
  return (
    <div>
      <header>
        <NavLink />
      </header>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <img src={logo} height="30" alt="logo" />
          <p>Home desu</p>
        </Grid>
      </Grid>
    </div>
  );
  }
}

export default Home;
