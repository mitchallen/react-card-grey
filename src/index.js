/*
    Module: @mitchallen/react-card-grey
    Author: Mitch Allen
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const paperStyle = {
  height: 300,
  width: 300,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: 'rgba(0, 0, 0, 0.5)'
};

// const CardGrey = ({ children, ...props }) => (

const CardGrey = ({ children }) => (
  <div>
   <MuiThemeProvider>
      <Paper style={paperStyle} zDepth={5}>    
        {children}
      </Paper>
    </MuiThemeProvider>
  </div>   
);

CardGrey.propTypes = {
  children: PropTypes.object
};

export default CardGrey;