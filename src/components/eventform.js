import React, { Component } from "react";
import { Form, Input, InputNumber, Button } from "antd";

class EventForm extends Component {
  layout = {
    labelCol: {
      span: 8
    },
    wrapperCol: {
      span: 16
    }
  };
  validateMessages = {
    required: "This field is required!",
    types: {
      email: "Not a validate email!",
      number: "Not a validate number!"
    },
    number: {
      range: "Must be between ${min} and ${max}"
    }
  };

  state = {};

  render() {
    return (
      <Form
        {...this.layout}
        name="nest-messages"
        onFinish={this.onFinish}
        validateMessages={this.validateMessages}
      >
        <Form.Item
          name={["user", "name"]}
          label="Name"
          rules={[
            {
              required: true
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "email"]}
          label="Email"
          rules={[
            {
              type: "email"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["user", "age"]}
          label="Age"
          rules={[
            {
              type: "number",
              min: 0,
              max: 99
            }
          ]}
        >
          <InputNumber />
        </Form.Item>
        <Form.Item name={["user", "website"]} label="Website">
          <Input />
        </Form.Item>
        <Form.Item name={["user", "introduction"]} label="Introduction">
          <Input.TextArea />
        </Form.Item>
        <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default EventForm;
