import React, { useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd';

import { setQuizName } from '../../actions/quizAction';
import { setQuizzerName, setQuizzerAvatar } from "../../actions/userAction";
 
import "./LandingPage.css";

const avatars = [
  "https://i.ibb.co/XJ7BqGD/User-1.png",
  "https://i.ibb.co/4ZxvFcB/User-2.png",
  "https://i.ibb.co/WtJ0hzF/User-3.png",
  "https://i.ibb.co/J2Z8Y55/User-4.png",
  "https://i.ibb.co/c3fcZw9/User-5.png",
  "https://i.ibb.co/rk8kWs3/User-6.png",
  "https://i.ibb.co/Db5xcxn/User-7.png",
  "https://i.ibb.co/zbsdmTP/User-8.png"
]

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
    const [code, setCode] = useState();
    const [quizzername, setQuizzername] = useState();
    const history = useHistory();
    const dispatch = useDispatch();

    const joinQuiz = () =>
    {
      // some axios code
      // if code exists and username is unique
      if(quizzername && code)
      {
        dispatch(setQuizzerName(quizzername));
        dispatch(setQuizzerAvatar(avatars[Math.floor(Math.random() * (avatars.length + 1))]));
        history.push(`/quiz/${code}`);
      }
      else
        alert("Please fill all fields.")
    }

    return (
      <Form
        form={form}
        layout="vertical"
      >
        
        <Form.Item label="Quiz Code" tooltip="This is a required field">
          <Input required className = "join-quiz-input" placeholder="Enter the Quiz Code" onChange = {(e) => setCode(e.target.value)} />
        </Form.Item>
        <Form.Item label="Quizzer Name" tooltip="This is a required field">
          <Input required className = "join-quiz-input" placeholder="Enter your Name" onChange = {(e) => setQuizzername(e.target.value)} />
        </Form.Item>
        
        <Form.Item>
          <Button onClick = {() => joinQuiz()} type="primary" id="JoinQuizButton">Join</Button>
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
  return {quizname: state.quizname, user_name: state.user.name, user_avatar: state.user.avatar}
}

export default connect(dispatchStateToProp)(LandingPage);