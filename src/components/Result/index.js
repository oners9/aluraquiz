import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const Nome = styled.div`
font-size: 26px;
margin-bottom: 8px;
`;

export default function Result({ resultados }) {
  const total = resultados.length;
  const quantidade = resultados.filter((r) => r).length;
  const router = useRouter();
  const { nome } = router.query;

  return (
    <div>
      <Nome>{`Joelho Mole ${nome}`}</Nome>
      <div>
        {`Você acertou ${quantidade} de ${total} questões.`}
      </div>
      <ul>
        {resultados.map((resultado, index) => {
          const key = `resultado_${index}`;
          return (
            <li key={key}>
              {`#${index + 1}`}
              {' '}
              {resultado ? 'Acertou' : 'Errou'}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
