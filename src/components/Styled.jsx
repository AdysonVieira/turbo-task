import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 6rem;
  line-height: 1.1;
  max-width: 60rem;
  margin-inline: auto;
  span {
    display: inline-block;
    background: linear-gradient(
      160deg, 
      #76e4ff 0%,
      #646cff 50%, 
      #e00ee7 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    color: black;
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
  margin-bottom: 2rem;
  input {
    flex: 1;
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    border-radius: 0.5rem;
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

export const TaskCard = styled.p`
  margin: 0 0 2rem 0;
  flex: 1;
  font-size: 1.6rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  border: 1px solid #5c5c5c;
  background-color: #363636;
  outline: none;
  text-align: start;
`;