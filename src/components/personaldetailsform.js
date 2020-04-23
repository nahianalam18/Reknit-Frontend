import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, Button, message } from "antd";
import DisplayResult from "./displayresult";
import axios from "axios";
import { DataManager } from "./StateManager";

class Personalform extends Component {
  static contextType = DataManager;
  state = {
    step: 1,
  };

  //   handleChange = input => e => {
  //     this.setState({ [input]: e.target.value });
  //   };
  //   continue = () => {
  //     console.log("HERE");
  //     this.setState({ step: step + 1 });
  //   };
  //   continue = () => {
  //     console.log("HI");
  //     this.context.changeFirstName(this.context.ufirstname);
  //     this.context.changeLastName(this.context.ulastname);
  //     this.context.changeDOB(this.context.udob);
  //     this.context.changeEmail(this.context.uemail);
  //     this.context.changeTeamNumber(this.context.uteamnumber);
  //     this.context.resetState();
  //     console.log(this.context.ufirstname);
  //     console.log(this.context.ulastname);
  //   };
  teamResult;
  onFinish = (values) => {
    // axios
    //   .post(this.context.globalServerUrl + "checkTeam", { values })
    //   .then((res) => {
    //     teamResult = res.data.AlreadyTeam[1];
    //   });
    // if (teamResult == true || values.hasOwnProperty("TeamName")) {
    //   axios
    //     .post(this.context.globalServerUrl + "postData", { values })
    //     .then((res) => {
    //       teamResult = res.data.AlreadyTeam[1];
    //     });
    // }
  };

  onFinishFailed(value) {
    console.log("NOT DONE");
  }
  render() {
    switch (this.state.step) {
      case 1:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Personal Details"></AppBar>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  name="FirstName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Name!",
                    },
                  ]}
                >
                  <Input placeholder="First Name" />
                </Form.Item>
                <Form.Item
                  name="LastName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Last Name!",
                    },
                  ]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
                <Form.Item
                  name="Email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
                <Form.Item
                  name="DOB"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Date of Birth!",
                    },
                  ]}
                >
                  <Input placeholder="Date of Birth" />
                </Form.Item>
                <Form.Item
                  name="TNo"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Team Number!",
                    },
                  ]}
                >
                  <Input placeholder="Team Number" />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: "100%" }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
              <br />
              <br />
            </React.Fragment>
          </MuiThemeProvider>
        );
      case 2:
        return (
          <React.Fragment>
            <DisplayResult></DisplayResult>
          </React.Fragment>
        );
    }
  }
}

export default Personalform;
