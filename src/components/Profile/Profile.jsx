import { useContext, useEffect } from 'react'
import { UserContext } from '../../context/UserContext/UserState'

const Profile = () => {
	const { getUserInfo, user } = useContext(UserContext);
  
	// Check if user data exists before rendering
	if (!user) {
	  // Trigger user data retrieval
	  getUserInfo();
	  return <p>Loading user data...</p>;
	}
  
	return <h1>Profile {user.firstName}</h1>;
  };
export default Profile