import React, { useRef } from 'react'
import { FormContent } from './Styled'
 
const Form = ({ value, setValue, ...props}) => {
  
  const inputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue((value) => [ ...value, event.target[0].value ])
  }

  return (
    <FormContent onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder='Digite sua Tarefa'
        {...props}
      />
      <button>Adicionar</button>
    </FormContent>
  )
}

export default Form

