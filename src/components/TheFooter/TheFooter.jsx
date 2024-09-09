import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { HomeOutlined, GithubOutlined, LogoutOutlined } from '@ant-design/icons'
import { UserContext } from '../../context/UserContext/UserState'
import { FooterContainer, FooterContent, FooterLink, FooterText, FooterGithubLinks } from './TheFooter.styled'

function Footer() {
  const navigate = useNavigate()
  const { token, logout } = useContext(UserContext)

  const logoutUser = () => {
    logout()
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <FooterContainer>
      {token ? (
        <>
          <FooterContent>
            <FooterLink to="/" className="home-link">
              <HomeOutlined /> Inicio
            </FooterLink>
            <FooterLink to="/" onClick={logoutUser}> 
              <LogoutOutlined /> Logout
            </FooterLink>
          </FooterContent>
          <FooterText>&copy 2024 E-Commerce Project. All rights reserved.</FooterText>
          <FooterGithubLinks>
            <FooterLink to="https://github.com/denisc911" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> @denisc911
            </FooterLink>
            <FooterLink to="https://github.com/DaniCabrera91" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> @DaniCabrera91
            </FooterLink>
          </FooterGithubLinks>
        </>
      ) : (
        <>
          <FooterContent>
            <FooterLink to="/" className="home-link">
              <HomeOutlined /> Inicio
            </FooterLink>
            <FooterLink to="/login">Login</FooterLink>
          </FooterContent>
          <FooterText>&copy 2024 E-Commerce Project. All rights reserved.</FooterText>
          <FooterGithubLinks>
            <FooterLink to="https://github.com/denisc911" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> @denisc911
            </FooterLink>
            <FooterLink to="https://github.com/DaniCabrera91" target="_blank" rel="noopener noreferrer">
              <GithubOutlined /> @DaniCabrera91
            </FooterLink>
          </FooterGithubLinks>
        </>
      )}
    </FooterContainer>
  )
}

export default Footer
