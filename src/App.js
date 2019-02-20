import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Router from './Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <Router />
      </React.Fragment>
   
    );
  }
}

export default App;
