import styled from 'styled-components';

export const ButtonPrimaryStyled = styled.button`
  display: block;
  background-color: ${(props) => props.theme.colors.primary};
  border: 1px solid ${(props) => props.theme.colors.primaryDark};
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.title.s};
  color: ${(props) => props.theme.colors.white};
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const ButtonSecondaryStyled = styled.button`
  display: block;
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  margin: 2rem 0 0 auto;
  outline: none;
  font-size: ${(props) => props.theme.fontSize.title.s};
  color: ${(props) => props.theme.colors.gray.g500};
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }
`;