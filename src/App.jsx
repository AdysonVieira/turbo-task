import React, { useContext } from 'react'
import './App.css'
import Form from './components/Form'
import { SubTitle, Title, TaskCard } from './components/Styled'

const App = () => {
  const [tasks, setTasks] = React.useState([])

  return (
    <section className='App'>
      <Title>Crie uma lista de tarefas <span>prática!</span></Title>
      <SubTitle>Crie lista de tarefas de forma prática e rápida. Gerencie seu tempo e suas atividades em um só lugar.</SubTitle>
      <Form setValue={setTasks} value={tasks} />
      {tasks && tasks.map((task) => (
        <TaskCard>{task}</TaskCard>
      ))}
    </section>
  )
}

export default App
