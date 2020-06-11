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
        <Header className="header">
          BlackBoard
        </Header>

        <Content>
          
          <LoginForm />
        </Content>

        <Footer className="footer">
          Copy right by Huynh Yen Nhi
        </Footer>
      </Layout>
    );
  }
}
export default LoginPage;
