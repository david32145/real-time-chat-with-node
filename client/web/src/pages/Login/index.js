import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Ripples from 'react-ripples';

import { Container } from './styles';
import logo from '../../assets/logo.svg';
import logoName from '../../assets/logo-text.svg';

import InputText from '../../components/Input';

export default function Login() {
  const [nickName, setNickName] = useState("");
  const history = useHistory();
  function handleOnLogin() {
    if(!nickName){
      alert("Digite o Nickname !!!");
      return;
    }
    sessionStorage.setItem('nickName', nickName);
    history.push("/chat");
  }

  return (
    <Container>
      <div className="container-logo" >
        <img className="logo" src={logo} alt="Logo" />
        <img className="logo-name" src={logoName} alt="Logo Name" />
      </div>
      <div className="input-container">
        <InputText 
          onChange={(e) => setNickName(e.target.value)}
          placeholder="seu nickname aqui" 
          icon 
          className=".nick-name" />
        <Ripples className="button" onClick={handleOnLogin}>
          <span>Entrar</span>
        </Ripples>
      </div>
    </Container>
  );
}
