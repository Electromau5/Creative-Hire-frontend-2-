import React from "react";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { LoadingOutlined } from "@ant-design/icons";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

class ForgotPassword extends React.Component {
  render() {
    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div>
        {errorMessage}
        {this.props.loading ? (
          ""
        ) : (
          <Form
            {...layout}
            name="basic"
            style={{
              top: "500px",
            }}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="New Password"
              name="password1"
              style={{
                width: "500px",
              }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
              <Link to="/forgot-password/">Forgot Password</Link>
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="password2"
              style={{
                width: "500px",
              }}
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
              <Link to="/forgot-password/">Forgot Password</Link>
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button
                type="primary"
                size="large"
                style={{
                  background: "#063852",
                  borderColor: "#063852",
                  width: "300px",
                }}
                htmlType="submit"
              >
                {" "}
                Login
              </Button>{" "}
              <Link style={{ marginRight: "10px" }} to="/signup/">
                Create new account
              </Link>
            </Form.Item>
          </Form>
        )}
      </div>
    );
  }
}

export default ForgotPassword;
