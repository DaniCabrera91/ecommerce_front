import styled from 'styled-components';
import { Button, Form as AntForm, Input as AntInput } from 'antd';

// Estilo para el contenedor del formulario
export const FormContainer = styled(AntForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
  }
`;

// Estilo para los elementos del formulario
export const FormItem = styled(AntForm.Item)`
  display: flex;
  flex-direction: column;

  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text};
  }

  // Estilo específico cuando hay error de validación
  .ant-form-item-has-error .ant-input {
    background-color: ${({ theme }) => theme.colors.inputBackground}; // Respetar fondo según el tema
    border-color: ${({ theme }) => theme.colors.error}; // Cambiar borde según el tema
  }

  // También aplicar el estilo a los mensajes de error
  .ant-form-item-explain-error {
    color: ${({ theme }) => theme.colors.error}; // Color del texto de error según el tema
  }
`;

// Estilo para el input
export const InputStyled = styled(AntInput)`
  background-color: ${({ theme }) => theme.colors.inputBackground};
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inputBackground}; // No cambiar el fondo al hacer clic
    border-color: ${({ theme }) => theme.colors.highlight}; // Cambiar color del borde al enfocar
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlight};
  }
`;

// Estilo para el botón
export const ButtonStyled = styled(Button)`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.buttonText};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
