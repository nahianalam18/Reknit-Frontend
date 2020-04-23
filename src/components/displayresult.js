import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
import RaisedButton from "material-ui/RaisedButton";
import { DataManager } from "./StateManager";
class DisplayForm extends Component {
  static contextType = DataManager;
  state = {};
  continue = () => {
    this.context.changeFirstName(this.context.ufirstname);
    this.context.changeLastName(this.context.ulastname);
    this.context.changeDOB(this.context.udob);
    this.context.changeEmail(this.context.uemail);
    this.context.changeTeamNumber(this.context.uteamnumber);
    this.context.resetState();
  };
  render() {
    switch (1) {
      case 1:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Confirm" />
              <List>
                {" "}
                {/* Listing all the data entered by the Teacher  */}
                <ListItem
                  primaryText="First Name"
                  secondaryText={this.context.ufirstname}
                />
                <ListItem
                  primaryText="Last Name"
                  secondaryText={this.context.ulastname}
                />
                <ListItem
                  primaryText="Email"
                  secondaryText={this.context.uemail}
                />
                <ListItem
                  primaryText="Date of Birth"
                  secondaryText={this.context.udob}
                />
                <ListItem
                  primaryText="Team Number"
                  secondaryText={this.context.uteamnumber}
                />
              </List>
              {/* <RaisedButton
                label="Back"
                danger={true}
                style={StyleSheet.button}
                onClick={this.back}
              /> */}
              <RaisedButton
                label="Confirm & Continue"
                primary={true}
                style={StyleSheet.button}
                onClick={this.continue}
              />
            </React.Fragment>
          </MuiThemeProvider>
        );
    }
  }
}

export default DisplayForm;
