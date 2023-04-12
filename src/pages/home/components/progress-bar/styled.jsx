import styled from "styled-components";

export const ProgressBarContainer = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
  
  .progressbar-percent {
    display: flex;
    justify-content: end;
    padding-top: 2rem;
    color: ${(props) => props.theme.colors.gray.g400};
    font-size: ${(props) => props.theme.fontSize.text.s};
  }
  .progressbar-border {
    display: flex;
    align-items: center;
    border: 0.05rem solid ${(props) => props.theme.colors.gray.g600};
    border-radius: 0.5rem;
    height: 1rem;
  }
  
  .progressbar-thumb {
    background-color: ${(props) => props.theme.colors.success.succ400};
    border-radius: 0.5rem;
    height: 0.8rem;
    transition: all 0.2s ease-in-out;
  }

`;