import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { Form, Input, message, Button, Menu, Dropdown } from "antd";
import axios from "axios";

class ClothForm extends Component {
  onFinish = (values) => {
    axios.post(this.context.globalServerUrl, { values }).then((res) => {
      console.log(res.data);
      if (res.data.success === "True") {
        message.success("Done with execution!");
        this.context.setDataTable(res.data.data);
      } else if (res.data.success === "Partial") {
        message.warn("No records affected!");
      } else {
        message.error(res.data.Message);
      }
    });
  };

  onFinishFailed(value) {
    console.log("NOT DONE");
  }

  render() {
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
              name="Quantity"
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
              name="Material"
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
              name="Color"
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
}

export default ClothForm;
