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
import { UploadOutlined } from '@ant-design/icons';


class CreateAssignment extends React.Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    onChange = (time, timeString) => {
        console.log(time, timeString);
    }

    onChange = (e) => {
        console.log(`checked = ${e.target.checked}`);
    }

    render() {
        return (
            <div className="main">

                <div className="info">
                    <h3>ASSIGNMENT INFORMATION</h3>
                    <Form.Item label="Name and color">
                        <Input />
                    </Form.Item>
                    <p>Instruction</p>
                    <ReactQuill></ReactQuill>
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
                    <Form.Item label="Due Date">
                        <DatePicker onChange={this.onChange} />
                        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Form.Item>
                </div>

                <hr />

                <div className="grading">
                    <h3>GRADING</h3>
                    <Form.Item label="Points Possible">
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
                    <Button type="primary">Submit</Button>
                </div>

            </div>

        );
    }
}
export default CreateAssignment;