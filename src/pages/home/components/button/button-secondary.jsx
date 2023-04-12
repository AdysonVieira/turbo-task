import React from 'react'
import { ButtonSecondaryStyled } from './styled'

const ButtonSecondary = ({ children, onClick }) => {
  return (
    <ButtonSecondaryStyled onClick={onClick}>{children}</ButtonSecondaryStyled>
  )
}

export default ButtonSecondary