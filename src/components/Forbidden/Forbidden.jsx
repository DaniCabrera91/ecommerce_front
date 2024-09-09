import React from 'react';
import { Link } from 'react-router-dom';
import { ForbiddenContainer, ForbiddenTitle, ForbiddenMessage, StyledLink } from './Forbidden.styled';

const Forbidden = () => {
  return (
    <ForbiddenContainer>
      <ForbiddenTitle>403 Forbidden</ForbiddenTitle>
      <ForbiddenMessage>You do not have permission to access this page.</ForbiddenMessage>
      <StyledLink to="/">Go to Home</StyledLink>
    </ForbiddenContainer>
  );
};

export default Forbidden;
