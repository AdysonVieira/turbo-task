import React from 'react'
import { FormContent } from './Styled'
 
const Form = () => {
  return (
    <>
        <FormContent>
            <input type="text" placeholder='Digite sua Tarefa'/>
            <button>Adicionar</button>
        </FormContent>
    </>
  )
}

export default Form