import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class Success extends Component {
  start = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <React.Fragment>
        <AppBar position="sticky">
          <Typography variant="h6">This is my home page.</Typography>
        </AppBar>
        <h3>Welcome to my application</h3>
        <Button variant="contained" color="primary" onClick={this.start}>
          Let's start
        </Button>
      </React.Fragment>
    );
  }
}
const styles = {
  button: {
    margin: 15
  }
};
