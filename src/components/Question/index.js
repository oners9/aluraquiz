import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import Alternatives from './Alternatives';

const Image = styled.img`
  width: 100%;
  height: 80px;
`;

export default function Question({ question, onSubmit }) {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState();
  const temOpcaoSelecionada = opcaoSelecionada !== undefined;
  const [respostaConfirmada, setRespostaConfirmada] = useState(false);
  const [timer, setTimer] = useState(2);
  const timeoutID = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    setRespostaConfirmada(true);
  }

  useEffect(() => {
    if (respostaConfirmada) {
      timeoutID.current = setTimeout(() => {
        if (timer === 1) {
          const isRespostaCorreta = opcaoSelecionada === question.answer;
          clearTimeout(timeoutID.current);
          onSubmit(isRespostaCorreta);
        } else {
          setTimer((oldTimer) => oldTimer - 1);
        }
      }, 1000);
    }
    return () => {
      clearTimeout(timeoutID.current);
    };
  }, [respostaConfirmada, timer]);

  return (
    <form onSubmit={handleSubmit}>
      <Image src={question.image} />
      <h1>{question.title}</h1>
      <p>{question.description}</p>
      <Alternatives
        question={question}
        opcaoSelecionada={opcaoSelecionada}
        respostaConfirmada={respostaConfirmada}
        setOpcaoSelecionada={setOpcaoSelecionada}
      />
      <Button
        disabled={!temOpcaoSelecionada || respostaConfirmada}
        type="submit"
        style={{ width: '100%' }}
      >
        {respostaConfirmada ? `Aguarde ${timer}...` : 'confirmar'}
      </Button>
    </form>
  );
}
