import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { DataManager } from "./StateManager";

class ClothForm extends Component {
  state = { step: 1 };
  static contextType = DataManager;
  registerAnswer = (value) => {
    this.context.changeRegist(value);
  };
  onFinish = async (values) => {
    console.log(values);
    let res = await axios.post(this.context.globalServerUrl + "postCloth", {
      values,
    });
    console.log(res);
    if (res.data.Valid === false) {
      this.setState({ step: 2 });
      return;
    }
    this.setState({ step: 3 });
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
              <AppBar title="Donate Clothes"></AppBar>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <Form.Item
                  name="quantity"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the quantity!",
                    },
                  ]}
                >
                  <Input placeholder="Quantity" />
                </Form.Item>
                <Form.Item
                  name="material"
                  rules={[
                    {
                      required: true,
                      message: "Please choose a type of material",
                    },
                  ]}
                >
                  <Input placeholder="Material" />
                </Form.Item>
                <Form.Item
                  name="color"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Color!",
                    },
                  ]}
                >
                  <Input placeholder="Color" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Email!",
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
          <MuiThemeProvider>
            <React.Fragment>
              <AppBar title="Donate Clothes"></AppBar>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
              >
                <h1>Invalid Email! Please try again with a proper email!</h1>
                <Form.Item
                  name="quantity"
                  rules={[
                    {
                      required: true,
                      message: "Please enter the quantity!",
                    },
                  ]}
                >
                  <Input placeholder="Quantity" />
                </Form.Item>
                <Form.Item
                  name="material"
                  rules={[
                    {
                      required: true,
                      message: "Please choose a type of material",
                    },
                  ]}
                >
                  <Input placeholder="Material" />
                </Form.Item>
                <Form.Item
                  name="color"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Color!",
                    },
                  ]}
                >
                  <Input placeholder="Color" />
                </Form.Item>
                <Form.Item
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a Email!",
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
      case 3:
        return (
          <React.Fragment>
            <h1>Donation Successful!</h1>
          </React.Fragment>
        );
    }
  }
}

export default ClothForm;
