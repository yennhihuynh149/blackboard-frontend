import React from "react";
import { Layout, Menu, Breadcrumb, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

import "./coursePage.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ApolloClient, { gql } from 'apollo-boost';
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";

import CreateAssignment from '../../components/createAssignment'

import CourseView from '../../components/courseView'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Title } = Typography;


class CoursePage extends React.Component {
  constructor(props) {
    super(props);
    let gqlClient = new ApolloClient({
      uri: 'http://localhost:16021/graphqlsms'
    })
    this.state = {
      gqlClient: gqlClient
    }
  }
  componentDidMount() {
    this.state.gqlClient.query({
      query: gql`
        {
          getAllCourses {
            name, code, _id
        }
      }
      `
    }).then(result => {
      console.log(result.data.getAllCourses);
      
      this.setState({
        courses: result.data.getAllCourses
      })
    }).catch(error => {
      console.log("Error:", error)
    })
  }


  render() {
    return (
      <Layout>
        <Header className="header">
          {/* <div className="logo" /> */}
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          </Menu>
        </Header>
        <Layout className="bb-container">
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
            width={200}
            className="site-layout-background"
          >
            <Title level={3} style={{ paddingLeft: '5%' }}>Welcome</Title>
            <Menu
              mode="inline"
              defaultSelectedKeys={["1"]}
              defaultOpenKeys={["sub1"]}
              style={{ height: "100%", borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="Course List">
                {
                  (this.state.courses || []).map((course) =>
                  <Menu.Item  
                    onClick={() => {
                      this.setState({activeCourse: course})
                    }}
                    key={course.code}>
                      {course.name}
                  </Menu.Item>
                  )
                }
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <BrowserRouter>
                <Switch>
                  <Route exact path="/course">
                    <CourseView course={this.state.activeCourse} /> 
                  </Route>
                  <Route exact path="/course/assignment">
                    <CreateAssignment course={this.state.activeCourse} />
                  </Route>
                </Switch>
              </BrowserRouter>

            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
export default CoursePage;
