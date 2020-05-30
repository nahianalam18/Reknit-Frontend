import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, Button } from "antd";
import axios from "axios";
import { LeftCircleOutlined } from "@ant-design/icons";
import { DataManager } from "./StateManager";

class DeleteForm extends Component {
  static contextType = DataManager;
  state = {};
  registerAnswer = (value) => {
    this.context.changeRegist(value);
  };
  onFinish = async (values) => {
    console.log(values);
    let res = await axios.post(
      this.context.globalServerUrl + "deleteDonation",
      {
        values,
      }
    );
    console.log(res);
    this.registerAnswer(0);
    // if (res.data.Valid === false) {
    //   this.setState({ step: 2 });
    //   return;
    // }
    // this.setState({ step: 3 });
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Donation Refund"></AppBar>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              name="dID"
              rules={[
                {
                  required: true,
                  message: "Please enter a donation ID!",
                },
              ]}
            >
              <Input placeholder="Donation ID" />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please enter an Email!",
                },
              ]}
            >
              <Input placeholder="Email Address" />
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
          <Button
            onClick={() => {
              this.registerAnswer(1);
            }}
            icon={<LeftCircleOutlined />}
            type="primary"
            danger
          ></Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default DeleteForm;
