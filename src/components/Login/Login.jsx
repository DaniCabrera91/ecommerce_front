import { useState, useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserState';
import { LoginForm, InputField, SubmitButton } from './Login.styled';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the login function with an object containing email and password
      await login({ email, password });
      // Navigate to profile after successful login
      navigate('/profile');
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <InputField
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SubmitButton type="submit">Login</SubmitButton>
    </LoginForm>
  );
};

export default Login;
