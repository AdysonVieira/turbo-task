import React from 'react';
import { ErrorStyled, InputStyled } from './styled'

const Input = ({ value, onChange, isError, setIsError }) => {

  return (
    <>
      { isError && <ErrorStyled>Digite sua tarefa antes de adicionar</ErrorStyled>}
      <InputStyled
        className={`${ isError ? `error` : '' }`}
        type='text'
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={() => value.length > 0 ? setIsError(false) : ''}
        placeholder='O que precisa ser feito?'
        autoFocus
      />
    </>
  )
}

export default Input