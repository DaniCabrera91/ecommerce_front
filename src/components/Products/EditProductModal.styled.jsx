import styled from 'styled-components';
import { Modal, Form, Input, InputNumber, Select, Button } from 'antd';

export const ModalStyled = styled(Modal)`
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const FormItemStyled = styled(Form.Item)`
  display: flex;
  flex-direction: column;
`;

export const InputWrapperStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const InputNumberStyled = styled(InputNumber)`
  margin-right: 8px;
`;

export const ButtonStyled = styled(Button)`
  align-self: flex-end;
`;
