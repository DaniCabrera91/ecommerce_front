import styled from 'styled-components';
import { Button, Form as AntForm, Input as AntInput } from 'antd'

export const FormContainer = styled(AntForm)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 2rem auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;

  h2 {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const FormItem = styled(AntForm.Item)`
  display: flex;
  flex-direction: column;

  .ant-form-item-label > label {
    color: ${({ theme }) => theme.colors.text};
  }

  .ant-form-item-has-error .ant-input {
    background-color: ${({ theme }) => theme.colors.inputBackground};
    border-color: ${({ theme }) => theme.colors.error};
  }

  .ant-form-item-explain-error {
    color: ${({ theme }) => theme.colors.error}; 
  }
`;

export const InputStyled = styled(AntInput)`
  background-color: ${({ theme }) => theme.colors.inputBackground}; 
  border-color: ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text}; 

  &::placeholder {
    color: ${({ theme }) => theme.colors.textLight || theme.colors.text};
  }

  &:focus {
    background-color: ${({ theme }) => theme.colors.inputBackground}; 
    border-color: ${({ theme }) => theme.colors.highlight}; 
    color: ${({ theme }) => theme.colors.text};
  }

  &:hover {
    border-color: ${({ theme }) => theme.colors.highlight}; 
  }
`;

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
