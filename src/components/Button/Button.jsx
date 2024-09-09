import { ButtonStyled } from './Button.styled';

function Button({ children, onClick, type = 'button', disabled = false }) {
  return (
    <ButtonStyled type={type} onClick={onClick} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
}

export default Button;
