import React from 'react';
import styled from 'styled-components';

const ButtonBase = styled.button`
height: 30px;
background-color: ${({ theme }) => theme.colors.primary};
color: ${({ theme }) => theme.colors.contrastText};
border: 1px solid #FFF;
  opacity: 1;
  text-transform: uppercase;

&:hover {
  opacity: 1;
  border-color: #FFF;
  cursor: pointer;
}
&:disabled {
  opacity: 0.8;
  border-color: grey;
  cursor: not-allowed;
}
`;

export default function Button(props) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ButtonBase type="button" {...props} />;
}
