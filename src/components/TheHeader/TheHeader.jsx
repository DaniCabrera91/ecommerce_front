// import './TheHeader.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext/UserState'
import { ShoppingCartOutlined, HomeOutlined, ProfileOutlined, LogoutOutlined, ProductOutlined, UserAddOutlined, LoginOutlined } from '@ant-design/icons'

function TheHeader() {
	const navigate = useNavigate()
	const { token, logout } = useContext(UserContext)

	const logoutUser = () => {
		logout()
		setTimeout(() => {
			navigate('/')
		}, 2000)
	}

	return (
		<nav className="header">
			<h1>Header</h1>
			{token ? (
				<>
					<Link to="/"> <HomeOutlined /> Home 
						
					</Link>
					
					<Link to="/profile"> <ProfileOutlined /> Profile
						
					</Link>
					<Link to="/products"> <ProductOutlined /> Products
						
					</Link>
					<Link to="/cart"> <ShoppingCartOutlined />
						Cart
					</Link>
					<Link to="/" onClick={logoutUser}> <LogoutOutlined /> Logout
					</Link>
				</>
			) : (

				<>

				<Link to="/"><HomeOutlined />Home </Link>

				<Link to="/login"> <LoginOutlined /> Login</Link>
			
				<Link to="/register"> <UserAddOutlined /> Register</Link>

				</>
			)}
		</nav>
	)
}

export default TheHeader