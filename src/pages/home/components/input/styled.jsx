import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  } to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const InputStyled = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.gray.g800};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  color: ${(props) => props.theme.colors.gray.g400};
  font-size: ${(props) => props.theme.fontSize.title.s};
  transition: all 0.2s;
  animation: ${fadeIn} 0.2s forwards;
  
  ::placeholder {
    color: ${(props) => props.theme.colors.gray.g600};
  }
  
  &:hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.gray.g900};
  }
  
  &:focus {
    outline: 1px solid ${(props) => props.theme.colors.primaryDark};
    background-color: ${(props) => props.theme.colors.gray.g900};
  }
  
  &.error {
    border: 1px solid ${(props) => props.theme.colors.error.err400};
  }
  `;

export const ErrorStyled = styled.span`
  animation: ${fadeIn} 0.2s forwards;
  color: ${(props) => props.theme.colors.error.err400};
`;
