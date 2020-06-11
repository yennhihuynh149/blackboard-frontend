import React, { useState } from 'react';
import './index.css';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { Form, Input } from 'antd';
import { DatePicker } from 'antd';

import { TimePicker } from 'antd';
import moment from 'moment';


class CreateAssignment extends React.Component {

    onChange = (date, dateString) => {
        console.log(date, dateString);
    }
    onChange = (time, timeString) => {
        console.log(time, timeString);
    }
    render(){
        return(
            <div className="main">

                <div className="info">
                    <h3>ASSIGNMENT INFORMATION</h3>
                    <Form.Item label = "Name and color">
                        <Input/>
                    </Form.Item>
                    <p>Instruction</p>
                    <ReactQuill></ReactQuill>
                </div>

                <hr/>

                <div className="files">
                    <h3>ASSIGNMENT FILES</h3>
                </div>

                <hr/>

                <div className="due-date">
                    <h3>DUE DATES</h3>
                    <Form.Item label = "Due Date">
                        <DatePicker onChange={this.onChange} />   
                        <TimePicker onChange={this.onChange} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
                    </Form.Item>
                </div>

                <hr/>

                <div className="grading">
                    <h3>GRADING</h3>
                    <Form.Item label = "Points Possible">
                        <Input/>
                    </Form.Item>
                </div>

                <hr/>

                <div className="availabilyty">
                    <h3>AVAILABILITY</h3>
                    
                </div>

            </div>
            
        );
    }
}
export default CreateAssignment;