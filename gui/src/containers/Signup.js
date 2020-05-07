import React from "react";
import { Form, Input, Select, Checkbox, Button } from "antd";

import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

const { Option } = Select;

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

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

class RegistrationForm extends React.Component {
  formRef = React.createRef();

  render() {
    const onFinish = (values) => {
      this.props.onAuth(
        values.username,
        values.email,
        values.password,
        values.confirm
      );
      this.props.history.push("/");
      console.log("Received values of form: ", values);
    };

    return (
      <Form
        {...formItemLayout}
        name="register"
        onFinish={onFinish}
        scrollToFirstError
      >
        <Form.Item
          label="Username"
          name="username"
          style={{
            width: "500px",
          }}
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="E-mail"
          style={{
            width: "500px",
          }}
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          style={{
            width: "500px",
          }}
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="confirm"
          label="Confirm Password"
          style={{
            width: "500px",
          }}
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="agreement"
          valuePropName="checked"
          {...tailFormItemLayout}
        >
          <Checkbox>
            I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            style={{
              background: "#063852",
              borderColor: "#063852",
              width: "300px",
            }}
            htmlType="submit"
          >
            Signup
          </Button>{" "}
          Or
          <NavLink style={{ marginRight: "10px" }} to="/login/">
            {" "}
            Login
          </NavLink>
        </Form.Item>
      </Form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, email, password1, password2) =>
      dispatch(actions.authSignup(username, email, password1, password2)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
