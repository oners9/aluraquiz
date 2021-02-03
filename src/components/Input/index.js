import React from 'react';
import styled from 'styled-components';

const InputBase = styled.input`
height: 30px;
border: 1px solid #FFF;
padding: 0 8px;
margin-right: 8px;
border-radius: 2px;
`;

export default function Input(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <InputBase {...props} />;
}
