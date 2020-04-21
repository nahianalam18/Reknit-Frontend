import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class Personalform extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Register with us today"></AppBar>
          <TextField // Text Fields to let the Teacher enter data of the student
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            // onChange={this.props.handleChange("firstname")}
            // defaultValue={this.props.values.firstname}
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            // onChange={this.props.handleChange("lastname")}
            // defaultValue={this.props.values.lastname}
          />
          <br />
          <TextField
            hintText="Enter Your Email Address"
            floatingLabelText="Email"
            // onChange={this.props.handleChange("grade")}
            // defaultValue={this.props.values.grade}
          />
          <br></br>
          <TextField
            hintText="Enter Your Team Number"
            floatingLabelText="Team Number"
            // onChange={this.props.handleChange("age")}
            // defaultValue={this.props.values.age}
          />
          <br></br>
          <TextField
            hintText="Enter Your Date of Birth"
            floatingLabelText="Date of Birth"
            // onChange={this.props.handleChange("age")}
            // defaultValue={this.props.values.age}
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

export default Personalform;
