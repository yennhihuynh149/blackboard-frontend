import React from "react";
import { Layout } from "antd";
import "./index.css";
import LoginForm from "../../components/loginForm";

const { Header, Footer, Content } = Layout;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <Header>
          BlackBoard
        </Header>

        <Content>
          
          <LoginForm />
        </Content>

        <Footer>Footer</Footer>
      </Layout>
    );
  }
}
export default LoginPage;
