import React from 'react'
import './App.css'
import Form from './components/Form'
import { SubTitle, Title } from './components/Styled'

const App = () => {

  return (
    <section className='App'>
      <Title>Crie uma lista de tarefas <span>prática!</span></Title>
      <SubTitle>Crie lista de tarefas de forma prática e rápida. Gerencie seu tempo e suas atividades em um só lugar.</SubTitle>
      <Form />
    </section>
  )
}

export default App
