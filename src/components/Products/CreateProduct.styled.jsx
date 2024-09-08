import styled from 'styled-components';
import { Form, Input, InputNumber, Select, Button } from 'antd';

export const FormContainer = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: auto;
`;

export const FormItem = styled(Form.Item)`
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const InputNumberStyled = styled(InputNumber)`
  margin-right: 8px;
`;

export const ButtonStyled = styled(Button)`
  align-self: flex-end;
`;
