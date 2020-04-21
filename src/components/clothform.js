import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

class ClothForm extends Component {
  state = {};
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Donate Clothes"></AppBar>
          <TextField // Text Fields to let the Teacher enter data of the student
            hintText="Enter The Color of Cloth"
            floatingLabelText="Color"
            // onChange={this.props.handleChange("firstname")}
            // defaultValue={this.props.values.firstname}
          />
          <br></br>
          <TextField // Text Fields to let the Teacher enter data of the student
            hintText="Enter The Material of Cloth"
            floatingLabelText="Material"
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

export default ClothForm;
