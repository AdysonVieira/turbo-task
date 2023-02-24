import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 1.1;
  max-width: 60rem;
  margin-inline: auto;
  span {
    color: #646cff;
  }
  `;

export const SubTitle = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 6rem;
  color: #a3a3a3;
`;

export const FormContent = styled.form`
  display: flex;
  gap: 1rem;
  input {
    flex: 1;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    border-radius: 0.5;
    border: 1px solid #5c5c5c;
    outline: none;
  }
  
  input:focus,
  input:hover {
    border: 1px solid #646cff;
  }

  button {
    border-radius: 5px;
    border: 1px solid #ffffff24;
    padding: 0.6em 1.2em;
    font-size: 1.6rem;
    font-weight: 400;
    font-family: inherit;
    background-color: #646cff;
    cursor: pointer;
    transition: border-color 0.25s;
  }
  button:hover {
    background-color: #535bf2;
    border-color: #535bf2;
  }
`;