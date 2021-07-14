import React, { useState } from "react";
import { Row, Col } from "antd";

import "./Message.css";

const Message = ({ user, name, avatar, text, time }) =>
{
    return (
        <div>
            {(user === "admin" || user === name) && (
                <>
                    <Row>
                        <Col span = {6}>
                            <img className = "Message__user-avatar" src = {avatar} alt = "pfp" />
                        </Col>
                        <Col className = "Message_time" span = {18}>
                            <p>{time}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col span = {24}>
                            <p className = "Message__user-message col-8">
                                {user === name ? "YOU" : user.toUpperCase()}: {text["message"] || text }
                            </p>
                        </Col>
                    </Row>
                    <hr />
                </>
            )}
        </div>
    )
}

export default Message;

{/* <Row className = "row">
    {(m.user === "admin" || m.user === name) ? 
    <>
        <Col span = {4}><img className = "chatArea__user-avatar col-4" src = {avatar} alt = "avatar" /></Col>
        <Col span = {20}><p className = "chatArea__user-message col-8">{m["user"] === name ? "YOU" : m["user"].toUpperCase()}: {m["text"]["message"] || m["text"] }</p></Col>
    </>: 
    <p></p>}    
</Row>
{(m.user === "admin" || m.user === name) ? <><i class="fas fa-clock"></i><p>{m["time"]}</p><hr /></> : <></>} */}