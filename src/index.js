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

// temp code coverage test
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}

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
  children: React.PropTypes.object
};

// CardGrey.propTypes = {
//   // someProp: PropTypes.isRequired,
// };

export default CardGrey;