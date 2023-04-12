import React from 'react'
import Home from './pages/home/home'
import Theme from './styles/Theme'
import GlobalStyle from './styles/global';


const App = () => {
  
  return (
    <Theme>
      <GlobalStyle />
        <Home />
    </Theme>
  )
}

export default App
