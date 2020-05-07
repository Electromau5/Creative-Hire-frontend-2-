import React from "react";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions/auth";
import { LoadingOutlined } from "@ant-design/icons";
import "antd/dist/antd.less";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

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

class NormalLoginForm extends React.Component {
  formRef = React.createRef();

  render() {
    const onFinish = (values) => {
      this.props.onAuth(values.username, values.password);
      this.props.history.push("/");
    };

    const onFinishFailed = (errorInfo) => {};

    let errorMessage = null;
    if (this.props.error) {
      errorMessage = <p>{this.props.error.message}</p>;
    }

    return (
      <div>
        {errorMessage}
        {this.props.loading ? (
          <Spin indicator={antIcon} />
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
            ref={this.formRef}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
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
              label="Password"
              name="password"
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
            </Form.Item>
            <Form.Item {...tailLayout}>
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

//const WrappedNormalLoginForm = this.forkmRef.create()(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuth: (username, password) =>
      dispatch(actions.authLogin(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);
