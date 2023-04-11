import React from 'react'
import { HomeContainer, SubTitle, Title, FormHome } from './styled'
import Input from './components/input/input';
import Button from './components/button/button';
import TaskBox from './components/task-list/task-box'
import { TaskContainer } from './components/task-list/styled'

const Home = () => {
  const [tasks, setTasks] = React.useState([]);
  const [value, setValue] = React.useState('');
  const [isError, setIsError] = React.useState(false);
  
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

  return (
    <HomeContainer>
      <Title>Aumente sua <span>produtividade</span></Title>
      <SubTitle>Crie uma lista de tarefas de forma prática e rápida, organize sua rotina e otimize seu tempo. É prático, sem cadastros e sem burocracia.</SubTitle>
      <TaskContainer>
        {tasks.map((task) => (
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
      <FormHome onSubmit={handleSubmit}>
        <Input
          value={value}
          onChange={setValue}
          isError={isError}
          setIsError={setIsError}
        ></Input>
        <Button>Adicionar tarefa</Button>
      </FormHome>
    </HomeContainer>
  );
};

export default Home;