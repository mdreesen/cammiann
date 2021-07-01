import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  MuiAppBar: {
    background: '#da995f'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className="navButtons">
          <Button href="/" color="inherit">Home</Button>
          <Button href="/about" color="inherit">About</Button>
          <Button href="/login" color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}