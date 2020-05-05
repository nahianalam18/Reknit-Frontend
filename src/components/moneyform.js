import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { DataManager } from "./StateManager";

class MoneyForm extends Component {
  state = {
    step: 1,
  };
  static contextType = DataManager;
  registerAnswer = (value) => {
    this.context.changeRegist(value);
  };
  onFinish = async (values) => {
    console.log(values);
    let res = await axios.post(this.context.globalServerUrl + "postMoney", {
      values,
    });
    console.log(res);
    if (res.data.Valid === false) {
      this.setState({ step: 2 });
      return;
    } else this.setState({ step: 3 });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Donate Money"></AppBar>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  name="amount"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an Amount!",
                    },
                  ]}
                >
                  <Input placeholder="Amount" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter an email!",
                    },
                  ]}
                >
                  <Input placeholder="Email" />
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
          <div>
            <MuiThemeProvider>
              <React.Fragment>
                <AppBar title="Donate Money"></AppBar>
                <Form
                  name="basic"
                  initialValues={{
                    remember: true,
                  }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}
                >
                  <h1>
                    The email is not valid! Plase try again with a valid email!
                  </h1>
                  <Form.Item
                    name="amount"
                    rules={[
                      {
                        required: true,
                        message: "Please enter an Amount!",
                      },
                    ]}
                  >
                    <Input placeholder="Amount" />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please enter an email!",
                      },
                    ]}
                  >
                    <Input placeholder="Email" />
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
          </div>
        );
      case 3:
        return (
          <React.Fragment>
            <h1>Donation Successful!</h1>
          </React.Fragment>
        );
    }
  }
}

export default MoneyForm;
