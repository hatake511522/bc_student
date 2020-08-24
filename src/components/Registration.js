import React, {useState, useEffect} from 'react';
import NavLink from './NavLink';
import { TextField, Button, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import RegisterContract from '../contracts/Registation.json'
// import getWeb3 from '../utils/getWeb3';
import Web3 from 'web3';


const Registration = (props) => {
  const [name, setName] = useState(props.name)
  const [number, setNumber] = useState(props.number)
  const [university, setUniversity] = useState(props.university)

  const state = { web3: null, accounts: null, contract: null };

  async function checkWeb3() {
    if (typeof Web3 != 'undefined') {
      const web3 = new Web3(Web3.givenProvider);
    } else {
      console.log("install metamask")
    }
  }

  useEffect(() => {
    checkWeb3();
  }, []);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const web3 = new Web3(Web3.givenProvider);
      const accounts = await web3.eth.getAccounts();
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = RegisterContract.networks[networkId];
      const instance = new web3.eth.Contract(
        RegisterContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      debugger;
      instance.methods.RegisterInfo(name, number, university).send({
        from: accounts[0]
      });
      console.log('your info was submitted. your name is ' + name);
      console.log('your number is ' + number);
      console.log('your univ is ' + university)
    } catch(error) {
      console.log(error);
      alert(
        `SUBMIT:Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  }

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const classes = useStyles();

  return(
    <>
      <NavLink />
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          Register your information.
        </Typography>
          <form onSubmit={handleSubmit} className={classes.form} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="number"
              value={number} 
              onChange={(e) => setNumber(e.target.value)} 
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="university"
              value={university}
              onChange={(e) => setUniversity(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >Submit</Button>
          </form>
      </Container>
    </>
  )
}

export default Registration;