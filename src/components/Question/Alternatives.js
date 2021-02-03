import React from 'react';
import styled from 'styled-components';
import Label from './Label';

const AlternativesBase = styled.div`
margin-bottom: 16px;
`;

export default function Alternatives({
  question,
  opcaoSelecionada,
  respostaConfirmada,
  setOpcaoSelecionada,
}) {
  return (
    <AlternativesBase>
      {question.alternatives.map((alternative, index) => {
        const alternativeId = `alternative_${index}`;
        const isCorreto = index === question.answer;
        const isSelecionado = index === opcaoSelecionada;

        return (
          <Label
            key={`${alternativeId}`}
            htmlFor={alternativeId}
            data-selecionado={isSelecionado}
            data-status={
              respostaConfirmada && `${isCorreto ? 'SUCESSO' : 'ERRO'}`
            }
          >
            <input
              name="reposta"
              disabled={respostaConfirmada}
              type="radio"
              id={alternativeId}
              onChange={() => setOpcaoSelecionada(index)}
            />
            {' '}
            {alternative}
          </Label>
        );
      })}
    </AlternativesBase>
  );
}
