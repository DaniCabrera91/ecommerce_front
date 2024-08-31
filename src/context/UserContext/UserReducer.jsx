const users = (state, action) => {
	switch (action.type) {
	  case 'LOGIN':
		return {
		  ...state,
		  token: action.payload.token,
		};
	  case 'GET_USER_INFO':
		return {
		  ...state,
		  user: action.payload, // Asegúrate de que estás actualizando el estado del usuario correctamente
		};
	  case 'LOGOUT':
		return {
		  ...state,
		  user: null,
		  token: null,
		};
	  default:
		return state;
	}
  };
  
  export default users;
  