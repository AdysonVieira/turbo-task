import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 78rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const Title = styled.h1`
  font-size: ${(props) => props.theme.fontSize.title.xxl};
  color: ${(props) => props.theme.colors.white};
  line-height: 1.1;
  max-width: 60rem;
  margin-inline: auto;
  margin-bottom: 3.2rem;
  text-align: center;
  
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
      color: ${(props) => props.theme.colors.white};
    }
    
  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${(props) => props.theme.fontSize.title.l};
  }
  `;

export const SubTitle = styled.p`
  font-size: ${(props) => props.theme.fontSize.text.xl};
  text-align: center;
  color: ${(props) => props.theme.colors.gray.g500};
  margin-bottom: 3.2rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    font-size: ${(props) => props.theme.fontSize.text.l};
  }
  `;

export const FormHome = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 6.4rem;
  padding-bottom: 2rem;
  
  @media screen and (max-width: ${(props) => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`;