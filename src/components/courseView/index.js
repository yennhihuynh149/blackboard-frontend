import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Button, Typography } from 'antd';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ApolloClient, { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { Table, Tag, Space } from 'antd';

const { Title } = Typography;

const columns = [
    {
        title: 'Title',
        dataIndex: 'title',
        key: 'title'
    },
    {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
    },
    {
        title: 'Due Date',
        dataIndex: 'dueDate',
        key: 'dueDate'
    },
]

const GET_ASSIGNMENTS_BY_ID = gql`
    query getAssignmentByCourseId($courseId: ID){
        getAssignmentByCourseId(courseId: $courseId) {
            title, courseId, description, dueDate
        }
    }
`

class CourseView extends React.Component {
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
        if (this.props.course)
        this.state.gqlClient.query({
            query: GET_ASSIGNMENTS_BY_ID,
            variables: {
                courseId: this.props.course._id
            }
        }).then(result => {
            this.setState({
                assignments: result.data.getAssignmentByCourseId
            })
        })
    }
    componentDidUpdate(prevProps) {
        if (prevProps.course !== this.props.course || !prevProps) {
            this.state.gqlClient.query({
                query: GET_ASSIGNMENTS_BY_ID,
                variables: {
                    courseId: this.props.course._id
                }
            }).then(result => {
                this.setState({
                    assignments: result.data.getAssignmentByCourseId
                })
            })
        }
    }

    render() {
        if (this.props.course)
            return (
                <div className="main">
                    <Title level={1}>{this.props.course.name}</Title>
                    <Title level={2}>Assignments</Title>
                    <Table columns={columns} dataSource={this.state.assignments}/>
                    <Link to="/course/assignment">
                        <Button>Create</Button>
                    </Link>
                </div>

            );
        else {
            return (<div></div>)
        }
    }
}
export default CourseView;