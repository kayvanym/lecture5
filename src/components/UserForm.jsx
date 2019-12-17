import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
import MediaCard from "./News";
import Welcome from "./Welcome";

import Grid from "@material-ui/core/Grid";

export class UserForm extends Component {
  state = {
    step: 0,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
    age: 0,
    contribute: false
  };

  // Continue to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Backwards one step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  handleCheckBox = input => e => {
    this.setState({ [input]: e.target.checked });
  };

  render() {
    const { step } = this.state;
    const {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      age,
      contribute
    } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio,
      age,
      contribute
    };

    switch (step) {
      case 1:
        return (
          <div>
            <FormUserDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          </div>
        );
      case 2:
        return (
          <FormPersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            handleCheckBox={this.handleCheckBox}
            values={values}
          />
        );

      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );

      case 4:
        return (
          <div>
            <Success values={values} />
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <MediaCard />
              </Grid>
              <Grid item xs={3}>
                <MediaCard />
              </Grid>
              <Grid item xs={3}>
                <MediaCard />
              </Grid>
            </Grid>
          </div>
        );
      default:
        return <Welcome nextStep={this.nextStep}></Welcome>;
    }
  }
}

export default UserForm;
