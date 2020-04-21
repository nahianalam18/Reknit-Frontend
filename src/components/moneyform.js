import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class MoneyForm extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Donate Money"></AppBar>
          <TextField // Text Fields to let the Teacher enter data of the student
            hintText="Enter The Amount of Money You Would Like To Donate"
            floatingLabelText="Amount"
            // onChange={this.props.handleChange("firstname")}
            // defaultValue={this.props.values.firstname}
          />
          <br />
          <TextField
            hintText="Enter Your Email Address"
            floatingLabelText="Email"
            // onChange={this.props.handleChange("lastname")}
            // defaultValue={this.props.values.lastname}
          />
          <br />
          <RaisedButton
            label="Continue"
            primary={true}
            // style={StyleSheet.button}
            // onClick={this.continue}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default MoneyForm;
