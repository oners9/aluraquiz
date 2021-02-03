import styled from 'styled-components';

const Label = styled.label`
  display: block;
  padding: 4px 8px;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &[data-selecionado='true'] {
    background-color: ${({ theme }) => theme.colors.primary};

    &[data-status='SUCESSO'] {
      background-color: ${({ theme }) => theme.colors.success};
    }

    &[data-status='ERRO'] {
      background-color: ${({ theme }) => theme.colors.wrong};
    }
  }
  input[type="radio"] {
    display: none;
  }
`;
export default Label;
