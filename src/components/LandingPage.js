import React from 'react';

import "./LandingPage.css";
import { Form, Input, Button, Radio } from 'antd';

const CreateQuizForm = () => {
  const [form] = Form.useForm();

  return (
    <Form
      form={form}
      layout="vertical"
    >
      
      <Form.Item label="Quiz Name" tooltip="This is a required field">
        <Input placeholder="Enter the Quiz Name" />
      </Form.Item>
      
      <Form.Item>
        <Button type="primary" id="CreateQuizButton">Create</Button>
      </Form.Item>
    </Form>
  );
};

const JoinQuizForm = () => {
    const [form] = Form.useForm();
  
    return (
      <Form
        form={form}
        layout="vertical"
      >
        
        <Form.Item label="Quiz Code" tooltip="This is a required field">
          <Input placeholder="Enter the Quiz Code" />
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" id="JoinQuizButton">Join</Button>
        </Form.Item>
      </Form>
    );
  };

const LandingPage=()=>{
    return(
        <div className="splitscreen">
            <div className="topPane">
                <h1 className="CreatQuizHeading">Create A Quiz</h1>
                <CreateQuizForm/>
            </div>
            <div className="bottomPane">
                <h1 className="JoinQuizHeading">Join A Quiz</h1>
                <JoinQuizForm/>
            </div>
      </div>
    )
}
export default LandingPage;