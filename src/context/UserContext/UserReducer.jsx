const UserReducer = (state, action) => {
	switch (action.type) {
	  case 'LOGIN':
		return {
		  ...state,
		  token: action.payload.token,
		  user: action.payload.user,
		  role: action.payload.role, // Añadir el rol
		};
	  case 'GET_USER_INFO':
		return {
		  ...state,
		  user: action.payload,
		  role: action.payload.role, // Añadir el rol
		};
	  case 'LOGOUT':
		return {
		  ...state,
		  token: null,
		  user: null,
		  role: null, // Limpiar el rol al hacer logout
		};
	  default:
		return state;
	}
  };
  
  export default UserReducer;
  