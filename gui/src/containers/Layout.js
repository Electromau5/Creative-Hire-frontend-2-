import React from "react";
import * as actions from "../store/actions/auth";
import { connect } from "react-redux";
import { Menu, Layout } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

class CustomLayout extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Layout>
        <Layout>
          <Sider
            style={{
              overflow: "auto",
              height: "100vh",
              /* position: "fixed",*/
              left: 0,
            }}
            width={300}
          >
            <h2 style={{ color: "#fff", padding: "50px" }}>CREATIVE HIRE</h2>
            <h4 style={{ color: "#fff", padding: "50px" }}>
              Match your portfolio with Job Descriptions
            </h4>
          </Sider>
          <Content style={{ padding: "50px" }}>
            <div className="site-layout-content">{this.props.children}</div>
          </Content>
        </Layout>
        <Footer style={{ textAlign: "center" }}>CreativeHire 2020</Footer>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(actions.logout()),
  };
};

export default connect(null, mapDispatchToProps)(CustomLayout);
