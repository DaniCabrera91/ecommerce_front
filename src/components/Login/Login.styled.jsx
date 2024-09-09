import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 8px;
`;

export const InputField = styled.input`
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.inputBackground}; // Fondo según el tema
  color: ${({ theme }) => theme.colors.text}; // Texto según el tema

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight || theme.colors.text}; // Placeholder más claro
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inputBackground}; // Mantener fondo oscuro en modo oscuro
    border-color: ${({ theme }) => theme.colors.highlight}; // Borde visible al enfocar
    color: ${({ theme }) => theme.colors.text}; // Texto visible
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlight}; // Cambiar borde al hacer hover
  }
`;

export const SubmitButton = styled.button`
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.highlight};
  }
`;
