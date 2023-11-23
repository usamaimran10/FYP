import React, { useState, useEffect, useRef } from "react";
import "./chat.css";
import {
  Col,
  Form,
  Button,
  Card,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Message from "./Message";
import ChatIcon from "./ChatIcon.jsx";
import Jwt from "jsonwebtoken";

import { useParams, useHistory } from "react-router-dom";

import axios from "axios";

import { useSelector } from "react-redux";

import { io } from "socket.io-client";

import moment from "moment";

// import aes256 from "aes256";
// var key = "my passphrase";

// var cipher = aes256.createCipher(key);

let socket = null;

const otherImg = "https://bootdey.com/img/Content/avatar/avatar5.png";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const params = useParams();
  const scrollRef = useRef();

  const [newMessage, setNewMessage] = useState("");

  const varUser = localStorage.getItem("UserData");
  const user = Jwt.decode(varUser);
  const loginId = localStorage.getItem("ChatId");

  const history = useHistory();

  // recieve message
  useEffect(() => {
    socket = io(`https://fyp-backend-gules.vercel.app/`);
    socket.on("getMessage", (message) => {
      console.log("message", message);
      //message.text = cipher.decrypt(message.text);
      setNewMessage(message);
    });
  }, []);
  //append messages array

  useEffect(() => {
    const chatOpened = currentChat?._id === newMessage.chat;
    if (newMessage && chatOpened) {
      console.log("setting", newMessage);

      setMessages((prev) => [...prev, newMessage]);
    }
  }, [newMessage, currentChat]);

  // online users
  useEffect(() => {
    socket.emit("addUser", loginId);
    socket.on("getUsers", (users) => {
      setOnlineUsers(users.map((item) => item.username));
    });
  }, []);
  // current chat
  useEffect(() => {
    if (params.chatid !== "thread") {
      // get chat
      axios
        .get(
          `https://fyp-backend-gules.vercel.app/api/chat/getChat/${params.chatid}`
        )
        .then(({ data }) => {
          const other = data.chat.members.find((item) => item._id !== loginId);
          setCurrentChat({
            ...data.chat,
            title: other.fullName,
            imgSrc: other.image ? other.image : otherImg,
          });
          const decryptedMessages = data.messages.map((item) => ({
            ...item,
            // text: cipher.decrypt(item.text),
          }));
          setMessages(decryptedMessages);
        })
        .catch((err) => console.log(err));
    }
  }, [params.chatid]);

  //run on mount get chats
  useEffect(() => {
    axios
      .get(`https://fyp-backend-gules.vercel.app/api/chat/getChats/${loginId}`)
      .then((result) => {
        const newChats = result.data.conversation.map((item) => ({
          title: item.members.find((item) => item._id !== loginId).fullName,
          imgSrc: otherImg,
          ...item,
        }));
        setChats(newChats);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const sendMessage = async () => {
    if (!text) {
      return;
    }

    var tempMessage = {
      text: text,
      sender: loginId,
      chat: currentChat._id,
    };
    // send req (save in database) and emit on socket.
    setText("");
    setMessages((prev) => [
      ...prev,
      {
        text: text,
        sender: loginId,
        chat: currentChat._id,
      },
    ]);
    axios.post(
      `https://fyp-backend-gules.vercel.app/api/chat/newMessage`,
      tempMessage
    );
    socket.emit("sendMessage", {
      receiverId: currentChat.members.find((member) => {
        return member._id !== loginId;
      })._id,
      message: tempMessage,
    });
  };

  // scroll to bottom
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // send text on enter
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  // disconnect user on unmount

  useEffect(() => () => socket.emit("logout"), []);

  return (
    <div className="container">
      <div className="test">
        <div className="row">
          <div
            className="col-lg-12"
            style={{
              textAlign: "center",
              marginTop: "10px",
              color: "#00ADB5",
              fontWeight: "bold",
              fontSize: "3rem",
            }}
          >
            <h1>Your Chats</h1>
          </div>
        </div>
        <Row>
          <Col
            lg={params.chatid === "thread" ? 12 : 10}
            className="chat-col col-lg-12"
            style={{ fontSize: "1.5rem" }}
          >
            <Card className="chat__body">
              <Row>
                <Col
                  className="col-3 chat__sidebar border-right"
                  style={{ fontSize: "1.2rem" }}
                >
                  <div className="px-4 d-none d-md-block">
                    <div className="d-flex align-items-center">
                      <div className="flex-grow-1">
                        {/* <input
                          style={{ fontSize: "1.2rem", marginLeft: "20px" }}
                          type="text"
                          className="form-control my-3"
                          placeholder="Search..."
                        /> */}
                      </div>
                    </div>
                  </div>
                  <hr />

                  <div key={onlineUsers} className="current-chats">
                    {chats &&
                      chats.map((item, index) => {
                        const other = item.members.find(
                          (i) => i._id !== loginId
                        );
                        return (
                          <ChatIcon
                            key={index}
                            imgSrc={other.imgSrc ? other.imgSrc : otherImg}
                            imgSrc={otherImg}
                            title={item.title}
                            badge={0}
                            chatId={item._id}
                            active={item._id === params.chatid}
                            online={onlineUsers.includes(other._id)}
                          />
                        );
                      })}
                  </div>
                </Col>

                {params.chatid !== "thread" && (
                  <Col className="col-9">
                    <div className=" py-2 px-4 border-bottom d-none d-lg-block">
                      <div className=" d-flex align-items-center py-1">
                        <div className="position-relative">
                          <img
                            src={
                              currentChat && currentChat.imgSrc
                                ? currentChat.imgSrc
                                : otherImg
                            }
                            className="rounded-circle mr-1 chat-img"
                            alt={currentChat && currentChat.title}
                            width="40"
                            height="40"
                          />
                        </div>
                        <div className="flex-grow-1 pl-3">
                          <strong style={{ paddingLeft: "5px" }}>
                            {currentChat &&
                              currentChat.members.find((member) => {
                                return member._id !== loginId;
                              }).fullName}
                          </strong>
                        </div>
                      </div>
                    </div>
                    <div
                      style={{ height: "80vh" }}
                      className="position-relative"
                    >
                      <div
                        style={{ height: "20vh", overflow: "scroll" }}
                        className="chat-messages p-4"
                      >
                        {messages &&
                          messages.map((item, index) => (
                            <div ref={scrollRef}>
                              <Message
                                key={index}
                                src={
                                  loginId === item.sender
                                    ? user.imgSrc
                                      ? user.imgSrc
                                      : otherImg
                                    : currentChat.imgSrc
                                    ? currentChat.imgSrc
                                    : otherImg
                                }
                                sender={item.sender}
                                time={moment(item.createdAt).format("h:mm")}
                                text={item.text}
                                self={loginId === item.sender}
                              />
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="flex-grow-0 py-3 px-4 border-top ">
                      <div
                        className="input-group chat-input"
                        style={{ fontSize: "2rem", width: "100vh" }}
                      >
                        <Form.Control
                          style={{ fontSize: "1.5rem" }}
                          as="textarea"
                          placeholder="Type message here..."
                          onKeyDown={handleKeyDown}
                          onChange={(e) => setText(e.currentTarget.value)}
                          value={text}
                        />
                        <Button
                          style={{
                            fontSize: "1.5rem",
                            width: "100px",
                          }}
                          onClick={sendMessage}
                        >
                          Send
                        </Button>
                      </div>
                    </div>
                  </Col>
                )}

                {params.chatid === "thread" && (
                  <Col className="col-lg-9">
                    <div className="welcome-box py-2 px-4 d-none d-lg-block">
                      <center>
                        <h3 className="welcome-chat">Welcome to your Inbox</h3>
                      </center>
                    </div>
                  </Col>
                )}
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Chat;
