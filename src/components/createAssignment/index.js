import React, { useState } from 'react';
import './index.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Input } from 'antd';
import { DatePicker } from 'antd';

import { TimePicker } from 'antd';
import moment from 'moment';

import { Checkbox } from 'antd';

import { Upload, message, Button } from 'antd';
import ApolloClient, { gql } from 'apollo-boost';
import { UploadOutlined } from '@ant-design/icons';
import { Redirect } from 'react-router-dom';

const CREATE_ASSIGNMENT = gql `
mutation createAssignment($newAssignment: AssignmentInput) {
  createAssignment(newAssignment: $newAssignment)
}
`

class CreateAssignment extends React.Component {
    constructor(props) {
        super(props);
        let gqlClient = new ApolloClient({
          uri: 'http://localhost:16021/graphqlsms'
        })
        this.state = {
          gqlClient: gqlClient
        }
    }
    onNameChanged = (e) => {
        console.log("Name: ", e)
        this.setState({
            name: e
        })
    }

    onDescriptionChange = (e) => {
        this.setState({
            description: e
        })
    }

    onFinish = (result) => {
        let requestForm = {
            title: result.name,
            description: this.state.description,
            dueDate: result.dueDate.format('yyyy-MM-DD'),
            pointPossible: parseInt(result.pointPossible),
            courseId: this.props.course._id
        }
        console.log(requestForm)
        this.state.gqlClient.mutate({
            mutation: CREATE_ASSIGNMENT,
            variables: {
                newAssignment: requestForm
            }
        }).then(result => {
            if (result.data.createAssignment === true) {
                this.setState({redirect: true})
            }
        })
    }
    render() {
        return (
            <div className="main">
                <Form onFinish={this.onFinish}>

                    <div className="info">
                        <h3>ASSIGNMENT INFORMATION</h3>
                        <Form.Item label="Name" name="name">
                            <Input allowClear/>
                        </Form.Item>
                        <p>Instruction</p>
                        <ReactQuill onChange={this.onDescriptionChange}></ReactQuill>
                    </div>

                    <hr />

                    <div className="files">
                        <h3>ASSIGNMENT FILES</h3>
                        <Form.Item label="Attach files">
                            
                        </Form.Item>
                    </div>

                    <hr />

                    <div className="due-date">
                        <h3>DUE DATES</h3>
                        <Form.Item label="Due Date" name="dueDate">
                            <DatePicker />
                            {/* <TimePicker onChange={this.onChange} /> */}
                        </Form.Item>
                    </div>

                    <hr />

                    <div className="grading">
                        <h3>GRADING</h3>
                        <Form.Item label="Points Possible" name="pointPossible">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Associated rubrics">
                            
                        </Form.Item>
                    </div>

                    <hr />

                    <div className="availability">
                        <h3>AVAILABILITY</h3>
                        <Checkbox onChange={this.onChange}>Make the assignment available</Checkbox>
                        <Form.Item label="Limit Availability">
                            <Checkbox onChange={this.onChange}>Display after</Checkbox> 
                            <DatePicker onChange={this.onChange} />
                            <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                            <br/>
                            <Checkbox onChange={this.onChange}>Display until</Checkbox>
                            <DatePicker onChange={this.onChange} />
                            <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                        </Form.Item>
                        <Checkbox onChange={this.onChange}>Track Number of Views</Checkbox>
                    </div>

                    <hr/>

                    <div className="btn">
                        <Button type="secondary">Cancel</Button>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </div>
                </Form>
                {this.state.redirect === true ? <Redirect to ="/course"/> : null}
            </div>

        );
    }
}
export default CreateAssignment;