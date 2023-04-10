import styled from 'styled-components';

export const ButtonPrimary = styled.button`
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