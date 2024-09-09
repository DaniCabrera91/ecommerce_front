import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { message } from 'antd'
import axios from 'axios'
import { FormContainer, FormItem, InputStyled, ButtonStyled } from './RegisterUser.styled'

const API_URL = import.meta.env.VITE_API_URL

const Register = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onFinish = async (values) => {
    setLoading(true)
    try {
      await axios.post(`${API_URL}/users`, values)
      message.success('Usuario registrado con éxito')
      navigate('/')
    } catch (error) {
      message.error('Error al registrar el usuario')
      console.error('Error de registro:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <FormContainer name="register" onFinish={onFinish} layout="vertical" initialValues={{ remember: true }}>
      <h2>Registro de Usuario</h2>

      <FormItem
        label="Nombre"
        name="firstName"
        rules={[{ required: true, message: 'Por favor ingrese su nombre' }]}
      >
        <InputStyled placeholder="Nombre" />
      </FormItem>

      <FormItem
        label="Apellido"
        name="lastName"
        rules={[{ required: true, message: 'Por favor ingrese su apellido' }]}
      >
        <InputStyled placeholder="Apellido" />
      </FormItem>

      <FormItem
        label="Email"
        name="email"
        rules={[
          { type: 'email', message: 'El correo electrónico no es válido' },
          { required: true, message: 'Por favor ingrese su correo electrónico' }
        ]}
      >
        <InputStyled placeholder="Email" />
      </FormItem>

      <FormItem
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor ingrese su contraseña' }]}
      >
        <InputStyled placeholder="Contraseña" />
      </FormItem>

      <FormItem
        label="Dirección"
        name="address"
        rules={[{ required: true, message: 'Por favor ingrese su dirección' }]}
      >
        <InputStyled placeholder="Dirección" />
      </FormItem>

      <FormItem
        label="Teléfono"
        name="phone"
        rules={[{ required: true, message: 'Por favor ingrese su teléfono' }]}
      >
        <InputStyled placeholder="Teléfono" />
      </FormItem>

      <FormItem>
        <ButtonStyled type="primary" htmlType="submit" loading={loading}>
          Registrarse
        </ButtonStyled>
      </FormItem>
    </FormContainer>
  )
}

export default Register
