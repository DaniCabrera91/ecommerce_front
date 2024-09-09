import styled from 'styled-components';
import { Button, Form, InputNumber } from 'antd';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
  background-color: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
`;

export const FormItemStyled = styled(Form.Item)`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.text};
  }
`;

export const InputNumberStyled = styled(InputNumber)`
  margin-right: 8px;
`;

export const ButtonStyled = styled(Button)`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary};
  border-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`;
