import React, { useState } from 'react'
import { Form, Input, Button, message } from 'antd'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL

const Register = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setLoading(true)
    try {
      const response = await axios.post(`${API_URL}/users`, values)
      message.success('Usuario registrado con éxito')
      navigate('/')
    } catch (error) {
      message.error('Error al registrar el usuario')
      console.error('Error de registro:', error)
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className="register-container">
      <h2>Registro de Usuario</h2>
      <Form
        name="register"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          remember: true,
        }}
      >
        <Form.Item
          label="Nombre"
          name="firstName"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su nombre',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Apellido"
          name="lastName"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su apellido',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              type: 'email',
              message: 'El correo electrónico no es válido',
            },
            {
              required: true,
              message: 'Por favor ingrese su correo electrónico',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Contraseña"
          name="password"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su contraseña',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Dirección"
          name="address"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su dirección',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Teléfono"
          name="phone"
          rules={[
            {
              required: true,
              message: 'Por favor ingrese su teléfono',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading}>
            Registrar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register