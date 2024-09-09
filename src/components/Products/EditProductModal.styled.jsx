import styled from 'styled-components';
import { Modal, Form, InputNumber, Button } from 'antd';

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: ${({ theme }) => theme.colors.cardBackground};
  }
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
