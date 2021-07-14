import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";

import { Input, Button, Row, Col } from "antd";
import Message from "./Message/Message";
import "./chatArea.css";

let socket;
const ENDPOINT = "localhost:8000";
const ChatArea = ({ user_name, avatar, quiz_id }) =>
{
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const name = user_name;
        const room = quiz_id;

        socket = io(ENDPOINT);

        setRoom(room);
        setName(name);

        socket.emit('join', { name, room }, (error) => {
        if(error) {
            alert(error);
        }
        });
    }, [ENDPOINT, quiz_id]);
    
    useEffect(() => {
        socket.on('message', message => {
        setMessages(messages => [ ...messages, message ]);
        });
        
        socket.on("roomData", ({ users }) => {
        setUsers(users);
        });
    }, []);

    const sendMessage = (event) => {
        event.preventDefault();

        if(message) {
        socket.emit('sendMessage', {message: message}, () => setMessage(''));
        }
    }

    return(
        <div className = "chatArea">
            <h1>Chat here</h1>
            <div className = "chatArea__area">
                <ScrollToBottom className = "chatArea__msgs">
                    {messages.map((m) => (
                        <Message 
                            name = {name} 
                            user = {m["user"]} 
                            avatar = {avatar} 
                            text = {m["text"]} 
                            time = {m["time"]} 
                        />
                    ))}
                </ScrollToBottom>
            </div>
            <form className = "chatArea__form">
                <Input
                    value = {message} 
                    onChange = {(e) => setMessage(e.target.value)}
                    onKeyPress = {(e) => e.key === "Enter" ? sendMessage(e) : null}
                    className = "chatArea__chat-input" 
                    placeholder = "Enter answers here"
                />
                <Button className = "chatArea__chat-send" type = "submit" onClick = {(e) => sendMessage(e)}>
                    <i class="fas fa-paper-plane"></i>
                </Button>
            </form>
        </div>
    )
}

export default ChatArea;