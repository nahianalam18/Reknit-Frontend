import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { DataManager } from "./StateManager";

class Personalform extends Component {
  static contextType = DataManager;
  state = {
    step: 1,
  };

  onFinish = async (values) => {
    console.log(values);
    let age = this.calculate_age(values.DOB);
    if (age >= 18) {
      this.context.changeGuardianStance(false);
    }
    let res = await axios.post(this.context.globalServerUrl + "checkTeam", {
      values,
    });
    this.context.changeTeamNo(res.data.AlreadyTeam[1]);
    //Both underage and Is not in a team
    if (
      age < 18 &&
      this.context.teamNo === false &&
      this.context.guardianNecessary === true
    ) {
      this.context.changeGuardianStance(false);
      this.setState({ step: 4 });
    }

    // Not in a team but no underage
    else if (res.data.AlreadyTeam[1] === false && age >= 18) {
      this.setState({ step: 2 });
    }
    //Underage but in a team
    else if (
      age < 18 &&
      this.context.teamNo === true &&
      this.context.guardianNecessary === true
    ) {
      this.context.changeGuardianStance(false);
      this.setState({ step: 3 });
      return;
    }

    if (
      (this.context.teamNo === true || values.hasOwnProperty("teamName")) &&
      this.context.guardianNecessary === false
    ) {
      this.context.changeRegist(0);
      console.log(this.context.teamNo);
      console.log(values.hasOwnProperty("teamName"));

      axios
        .post(this.context.globalServerUrl + "postData", { values })
        .then((res) => {
          console.log(res);
        });
    }
  };
  calculate_age = (dob1) => {
    var today = new Date();
    var birthDate = new Date(dob1); // create a date object directly from `dob1` argument
    var age_now = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age_now--;
    }
    return age_now;
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
                <h1>
                  Since the team number does not exist, Please enter the new
                  Team name and Your Phone Number!
                </h1>
                <Form.Item
                  name="teamName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Team Name!",
                    },
                  ]}
                >
                  <Input placeholder="Team Name"></Input>
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Phone Number!",
                    },
                  ]}
                >
                  <Input placeholder="Phone Number" />
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
      case 3:
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
                <h1>
                  Since you are under 18 We will need your guardian information!
                </h1>
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
                <Form.Item
                  name="guardionFirstname"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a First Name!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian First Name" />
                </Form.Item>
                <Form.Item
                  name="guardionLastname"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Last Name!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian Last Name" />
                </Form.Item>
                <Form.Item
                  name="guardionDOB"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a DOB!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian DOB" />
                </Form.Item>
                <Form.Item
                  name="guardionPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Phone Number!",
                    },
                  ]}
                >
                  <Input placeholder="Guardion Phone Number!" />
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
      case 4:
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
                <h1>
                  Since you are under 18 We will need your guardian information!
                </h1>
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
                <Form.Item
                  name="guardionFirstname"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a First Name!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian First Name" />
                </Form.Item>
                <Form.Item
                  name="guardionLastname"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Last Name!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian Last Name" />
                </Form.Item>
                <Form.Item
                  name="guardionDOB"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a DOB!",
                    },
                  ]}
                >
                  <Input placeholder="Guardian DOB" />
                </Form.Item>
                <Form.Item
                  name="guardionPhone"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Phone Number!",
                    },
                  ]}
                >
                  <Input placeholder="Guardion Phone Number!" />
                </Form.Item>
                <h1>
                  Since the team number does not exist, Please enter the new
                  Team name and Your Phone Number!
                </h1>
                <Form.Item
                  name="teamName"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Team Name!",
                    },
                  ]}
                >
                  <Input placeholder="Team Name"></Input>
                </Form.Item>
                <Form.Item
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Enter your Phone Number!",
                    },
                  ]}
                >
                  <Input placeholder="Phone Number" />
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
      default:
        return <h1>Default</h1>;
    }
  }
}

export default Personalform;
