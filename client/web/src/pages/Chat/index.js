import React, { useEffect, useState, useMemo, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { MdClose, MdSend } from 'react-icons/md';
import socketio from 'socket.io-client';

import ScrollArea from 'react-scrollbar';

import Ripples from 'react-ripples';

import api from '../../services/api';

import { Container, MessageItem } from './styles';

import logo from '../../assets/logo.svg';
import logoName from '../../assets/logo-text.svg';

import InputText from '../../components/Input';

export default function Chat() {
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const scrollRef = useRef(null);
  const socket = useMemo(() => socketio('localhost:3333'), [])
  const nickName = sessionStorage.getItem('nickName');
  useEffect(() => {
    if (!nickName) {
      history.push("/login");
    }

    async function loadMessages(){
      const response = await api.get("/message");
      setMessages([...response.data]);
      toBottomScroll()
    }

    loadMessages()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    socket.on('broadcast', (data) =>{
      setMessages([...messages, data])
      toBottomScroll()
    }) 
  },[messages, socket])

  function toBottomScroll(){
    const scroll = scrollRef.current;
    scroll.scrollArea.scrollYTo(scroll.state.realHeight)
  }

  async function handleSubmitMessage(){
    await api.post("/message", {
      owner: nickName,
      message: inputMessage,
    });

    setInputMessage("");
  }

  function handleCloseChat(){
    sessionStorage.removeItem('nickName');
    history.push("/login");
  }
  return (
    <Container>
      <div className="header">
        <img className="logo" src={logo} alt="Logo" />
        <img className="logo-name" src={logoName} alt="Logo Name" />
        <MdClose className="icon-close" size={25} color="#000" onClick={handleCloseChat} />
      </div>
      <div className="sub-header">
        <div className="line" />
        <span>Últimas 30 Mensagens</span>
        <div className="line" />
      </div>
      <ScrollArea
        ref={scrollRef} className="messages" speed={0.6} >
        <ul>
          {messages.map(message => (
            <MessageItem key={message.id} me={message.owner === nickName}>
              {message.owner !== nickName && <span>{message.owner}</span>}
              <div >
                {message.message}
              </div>
            </MessageItem>
          ))}
        </ul>
      </ScrollArea>
      <div className="bottom">
        <div className="line" />
        <div className="actions">
          <InputText 
            value={inputMessage} 
            placeholder="digite sua mensagem aqui..." 
            className="input"
            onKeyPress={(event) => event.key === 'Enter' ? handleSubmitMessage() : null}
            onChange={(e) => setInputMessage(e.target.value)}/>
          <Ripples className="button" onClick={handleSubmitMessage}>
            <MdSend size={25} color="#FFF" />
          </Ripples>
        </div>
      </div>
    </Container>
  );
}
