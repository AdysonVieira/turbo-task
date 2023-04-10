import React from 'react'
import { ButtonPrimary } from './styled'

const Button = ({ children }) => {
  return (
    <ButtonPrimary>{children}</ButtonPrimary>
  )
}

export default Button