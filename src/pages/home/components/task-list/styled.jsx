import styled from "styled-components";

export const TaskContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  min-width: 100%;
  justify-content: center;
  align-items: center;
  `;
export const TaskBoxStyled = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1.6rem;
  background-color: ${(props) => props.theme.colors.gray.g800};
  color: ${(props) => props.theme.colors.gray.g400};
  border: 1px solid ${(props) => props.theme.colors.gray.g700};
  border-radius: 0.5rem;
  padding: 1.2rem 2.4rem;
  font-size: ${(props) => props.theme.fontSize.text.l};
  min-width: 100%; 
  p {
    word-wrap: break-word;
    cursor: pointer;
  }
  
  #check {
    align-self: start;
    position: relative;
    width: 2rem;
    height: 2rem;
    top: 2px;
    cursor: pointer;
  }
  
  #close {
    align-self: start;
    width: 2rem;
    height: 2rem;
    position: relative;
    cursor: pointer;

  }
  
  &.checked {
    border: 1px solid ${(props) => props.theme.colors.success.succ400};
  }
  
  @media screen and (max-width: ${(props) => props.theme.breakpoints.s} ){
    max-width: ${(props) => props.theme.breakpoints.s};
  }
`;