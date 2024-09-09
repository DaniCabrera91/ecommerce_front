import React from 'react'
import { ForbiddenContainer, ForbiddenTitle, ForbiddenMessage, StyledLink } from './Forbidden.styled'

const Forbidden = () => {
  return (
    <ForbiddenContainer>
      <ForbiddenTitle>403 Forbidden</ForbiddenTitle>
      <ForbiddenMessage>No estas autorizado para entrar aquí</ForbiddenMessage>
      <StyledLink to="/">Volver a inicio</StyledLink>
    </ForbiddenContainer>
  )
}

export default Forbidden
