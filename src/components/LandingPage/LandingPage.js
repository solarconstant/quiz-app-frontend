import React, { useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
 
import "./LandingPage.css";
import { Form, Input, Button } from 'antd';
import { setQuizName } from '../../actions/quizAction';

const CreateQuizForm = () => {
  const [form] = Form.useForm();
  const [quizname, setQuizname] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const createQuiz = () =>
  {
    console.log(quizname);
    dispatch(setQuizName(quizname));

    history.push(`/create/${quizname}`);
  }

  return (
    <Form
      form={form}
      layout="vertical"
    >
      
      <Form.Item label="Quiz Name" tooltip="This is a required field">
        <Input required className = "create-quiz-input" placeholder="Enter the Quiz Name" onChange = {(e) => setQuizname(e.target.value)}/>
      </Form.Item>
      
      <Form.Item>
        <Button disabled = {!quizname.length} type="primary" id="CreateQuizButton" onClick = {() => createQuiz()}>Create</Button>
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
          <Input required className = "join-quiz-input" placeholder="Enter the Quiz Code" />
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
                <h1 className="CreateQuizHeading">Create A Quiz</h1>
                <CreateQuizForm/>
            </div>
            <div className="bottomPane">
                <h1 className="JoinQuizHeading">Join A Quiz</h1>
                <JoinQuizForm/>
            </div>
        </div>
    )
}

const dispatchStateToProp = (state) =>
{
  return {quizname: state.quizname}
}

export default connect(dispatchStateToProp)(LandingPage);