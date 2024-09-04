const ProductsReducer = (state, action) => {
    switch (action.type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: action.payload,
            };
        case 'ADD_CART':
            return {
                ...state,
                cart: [action.payload, ...state.cart],
            };
        case 'CLEAR_CART':
            return {
                ...state,
                cart: [],
            };
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(
                    (product) => product._id !== action.payload._id
                ),
            };
        case 'CREATE_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case 'GET_PRODUCT_BY_ID':
            return {
                ...state,
                product: action.payload,
            };
        case 'EDIT_PRODUCT':
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === action.payload._id
                        ? { ...product, ...action.payload }
                        : product
                ),
            };
		case 'GET_CATEGORIES':
			return {
				...state,
				categories: action.payload,
			};
	
			
        default:
            return state;
    }
};

export default ProductsReducer;
