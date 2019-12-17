import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";

export default class Success extends Component {
  render() {
    const {
      values: {
        firstName,
        lastName,
        email,
        occupation,
        city,
        bio,
        age,
        contribute
      }
    } = this.props;

    console.log(this.props.values);
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Thank You!" />
          <h3>Your information has been submitted</h3>
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="City" secondaryText={city} />
            <ListItem primaryText="Bio" secondaryText={bio} />
            <ListItem primaryText="Age" secondaryText={age} />
            <ListItem
              primaryText={
                contribute ? "I am a contributer" : "I am not a contributer"
              }
            />
          </List>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
