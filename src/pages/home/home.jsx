import React from 'react'
import useLocalStorage from '../../hooks/use-localstorage';
import { HomeContainer, SubTitle, Title, FormHome } from './styled'
import Input from './components/input/input';
import ButtonPrimary from './components/button/button-primary';
import ButtonSecondary from './components/button/button-secondary';
import TaskBox from './components/task-list/task-box'
import ProgressBar from './components/progress-bar/progress-bar';
import { TaskContainer } from './components/task-list/styled'

const Home = () => {
  const [tasks, setTasks] = React.useState(() => {
    let item = window.localStorage.getItem('tasks')
    return item ? JSON.parse(item) : []
  });
  const [value, setValue] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  
  React.useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  
  const toggle = React.useCallback((task) => {
    const newTasks = tasks.map((item) => {
      return item.id === task.id ? { ...item, checked: !item.checked } : item
    })
    setTasks(newTasks)
  }, [tasks]);

  
  const reset = () => {
    setValue('');
  };

  
  const removeTask = React.useCallback((task) => {
    const newTasks = tasks.filter((item) => item.id !== task.id)
    setTasks(newTasks)
  }, [tasks]);
  
  
  const handleSubmit = (event) => {
    event.preventDefault();
    value.length === 0 ? setIsError(true) : '';
    
    if (value.length > 0) {
      setTasks((prev) => [ ...prev, {
        id: new Date().getTime(),
        data: value,
        checked: false
      }]);
      setIsError(false);
      reset();
    };
  };

  const handleClick = React.useCallback(() => {
    setTasks([])
  }, []);

  React.useEffect(() => {
    const handleProgressBar = () => {
      const total = tasks.length
      const totalChecked = tasks.filter((item) => item.checked === true ).length
      const progress = (100 / total) * totalChecked
      return progress.toFixed()
    }
    setProgress(handleProgressBar())
  }, [tasks])

  React.useEffect(() => {
    const bodyEl = document.body
    console.log(bodyEl.scrollTop)
  }, [tasks])

  return (
    <HomeContainer> 
      <Title>Aumente sua <span>produtividade</span></Title>
      <SubTitle>Crie uma lista de tarefas de forma prática e rápida, organize sua rotina e otimize seu tempo. É prático, sem cadastros e sem burocracia.</SubTitle>
      { tasks.length > 0 && <ProgressBar progress={progress}/>}
      <TaskContainer>
        {tasks?.map((task) => (
          <TaskBox
          key={task.id}
          id={task.id}
          value={task.data}
          checked={task.checked}
          toggle={() => toggle(task)}
          remove={() => removeTask(task)}
          />
          ))}
      </TaskContainer>
      {tasks.length > 0 && <ButtonSecondary onClick={handleClick}>Limpar lista</ButtonSecondary>}
      <FormHome
        style={{marginTop:`${tasks.length === 0 ? '0' : '6.4rem'}`, transition: 'all 0.2s ease'}} onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={setValue}
          isError={isError}
          setIsError={setIsError}
        />
        <ButtonPrimary>Adicionar tarefa</ButtonPrimary>
      </FormHome>
    </HomeContainer>
  );
};

export default Home;