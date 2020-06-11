import React, { Component } from "react";
import { Layout, Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import './index.css';
import { Redirect } from 'react-router-dom';


class LoginForm extends Component {
  state = {
    isAuthenticated: false
  }

  onFinish = (values) => {
    console.log("Success:", values);
    this.setState({ isAuthenticated: true })
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="divLogin">
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item >
            <Button type="primary" htmlType="submit">
              Submit
          </Button>
          </Form.Item>
        </Form>
        {this.state.isAuthenticated === true ? <Redirect to ="/coursepage"/> : null}
      </div>
    );
  }
}

export default LoginForm;
