import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import Textfield from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField
} from "@material-ui/core";

export default class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <ValidatorForm ref="form" onSubmit={this.continue}>
        <MuiThemeProvider>
          <React.Fragment>
            <AppBar title="Enter your User Details" />
            <Textfield
              hintText="Enter Your First Name"
              floatingLabelText="First Name"
              onChange={handleChange("firstName")}
              defaultValue={values.firstName}
            />
            <br />
            <Textfield
              hintText="Enter Your Last Name"
              floatingLabelText="Last Name"
              onChange={handleChange("lastName")}
              defaultValue={values.lastName}
            />
            <br />
            <br />
            <TextValidator
              style={{ width: "250px" }}
              label="Email"
              onChange={handleChange("email")}
              name="email"
              value={values.email}
              validators={["required", "isEmail"]}
              errorMessages={["this field is required", "email is not valid"]}
            />
            <br />
            <RaisedButton
              label="Continue"
              primary={true}
              style={styles.button}
              type="submit"
            />
          </React.Fragment>
        </MuiThemeProvider>
      </ValidatorForm>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};
