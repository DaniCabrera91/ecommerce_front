const UserReducer = (state, action) => {
	switch (action.type) {
	  case 'LOGIN':
		return {
		  ...state,
		  token: action.payload.token,
		  user: action.payload.user,
		  role: action.payload.role,
		};
	  case 'GET_USER_INFO':
		return {
		  ...state,
		  user: action.payload,
		  role: action.payload.role,
		};
	  case 'LOGOUT':
		return {
		  ...state,
		  token: null,
		  user: null,
		  role: null,
		};
	  default:
		return state;
	}
  };
  
  export default UserReducer;
  