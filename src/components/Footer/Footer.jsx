import './Footer.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { HomeOutlined } from '@ant-design/icons';
import { UserContext } from '../../context/UserContext/UserState'; // Asegúrate de que este path es correcto

function Footer() {
  const navigate = useNavigate();
  const { token, logout } = useContext(UserContext);

  const logoutUser = () => {
    logout();
    setTimeout(() => {
      navigate('/')
    }, 2000)
  }

  return (
    <footer className="Footer">
      {token ? (
        <>
          <div className="footer-content">
            <Link to="/" className="home-link">
              <HomeOutlined /> Ir al cielo
            </Link>
            <Link to="/" onClick={logoutUser}> Logout
					</Link>
          </div>
          <p>&copy; 2024 My Website. All rights reserved.</p>
          <Link to="/terms-of-service" className="tos-link">
            Terms of Service
          </Link>
        </>
      ) : (
        <div className="footer-login">
				<Link to="/login"> Login</Link>
        </div>
      )}
    </footer>
  );
}

export default Footer