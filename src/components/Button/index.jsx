import React from 'react'
import PropTypes from 'prop-types'
import { ButtonContainer } from './style'


function Button({children, ...rest}) {
  return (
    <ButtonContainer {...rest}>{children}</ButtonContainer>
  )
}

export default Button

Button.propTypes = {
    children: PropTypes.string
}