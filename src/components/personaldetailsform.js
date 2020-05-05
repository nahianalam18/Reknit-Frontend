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
    let res = await axios.post(this.context.globalServerUrl + "checkTeam", {
      values,
    });
    this.context.changeTeamNo(res.data.AlreadyTeam[1]);
    // console.log(res.data.AlreadyTeam[1]);
    // console.log(values.hasOwnProperty("teamName"));
    if (this.context.teamNo === true || values.hasOwnProperty("teamName")) {
      // this.context.changeRegist(0);
      // console.log(this.context.teamNo);
      // console.log(values.hasOwnProperty("teamName"));
      axios
        .post(this.context.globalServerUrl + "postData", { values })
        .then((res) => {
          console.log(res);
        });
    }
  };
  formGen = (TC) => {
    if (TC === true)
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
              {console.log("HI")}
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
    else {
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
                Since the team number does not exist, Please enter the new Team
                name and Your Phone Number!
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
                {/* <Input placeholder="Team Name" /> */}
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
    }
  };
  onFinishFailed(value) {
    console.log("NOT DONE");
  }
  render() {
    switch (this.state.step) {
      case 1:
        return this.formGen(this.context.teamNo);
    }
  }
}

export default Personalform;
