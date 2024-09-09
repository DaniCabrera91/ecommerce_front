# ecommerce_front  
[@DaniCabrera91](https://github.com/DaniCabrera91)
[@denisc911](https://github.com/denisc911)

Este proyecto es una aplicación web de un ecommerce que permite a los usuarios registrarse, iniciar sesión, navegar por los productos, agregarlos al carrito, y gestionar su perfil con sus pedidos.

## Componentes del proyecto básicos

- **Register**: Página de registro donde los nuevos usuarios pueden crear una cuenta.

- **Login**: Página de inicio de sesión para usuarios registrados.

- **Home**: Página principal de la aplicación donde se muestran los productos o destacados.

- **Products**: Vista de todos los productos disponibles.

- **Product**: Vista individual de un producto con detalles, como precio y descripción.

- **Cart**: Página de carrito de compras donde se listan los productos agregados por el usuario.

- **Perfil**: Vista del perfil del usuario logueado, mostrando sus datos personales y pedidos realizados.

- **Header**: Barra de navegación común a todas las páginas.

- **Footer**: Pie de página común a todas las páginas.

## Rutas de los componentes:

El enrutado de la aplicación se hace con **React Router**. Donde las rutas básicas son:

- `/home`: Página de inicio de la aplicación.
- `/login`: Página de inicio de sesión.
- `/register`: Página de registro.
- `/profile`: Página del perfil del usuario logueado.
- `/cart`: Carrito de compra del usuario
- `/orders`:Pedidos realizados por el usuario
- `/admin`: Solo visible para usuarios administradores permite CRUD de productos.

El archivo de configuración de rutas principales se encuentra en el componente `App.jsx`

### Ejemplo de Configuración de Rutas:

```jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Products from './components/Products/Products';
import Cart from './components/Cart/Cart';
import Admin from './components/Admin/Admin';
import Register from './components/RegisterUser/RegisterUser';
import Forbidden from './components/Forbidden/Forbidden'; 
import { UserProvider } from './context/UserContext/UserState';
import { ProductsProvider } from './context/ProductsContext/ProductsState';
import { OrdersProvider } from './context/OrdersContext/OrdersState';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import TheHeader from './components/TheHeader/TheHeader';
import Footer from './components/TheFooter/TheFooter'; 
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './theme/globalStyles'; 
import theme from './theme/theme'; 

function App() {
   return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <UserProvider>
        <ProductsProvider>
          <OrdersProvider>
            <Router>
              <TheHeader />
              <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
                <Route path="/products" element={<ProtectedRoute element={<Products />} />} />
                <Route path="/cart" element={<ProtectedRoute element={<Cart />} />} />
                <Route path="/admin" element={<ProtectedRoute element={<Admin />} requiredRole="admin" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/403" element={<Forbidden />} /> {/* Página de acceso denegado */}
              </Routes>
              <Footer />
            </Router>
          </OrdersProvider>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  );
}

```
export default App;

##  Estructura de Ficheros y directorios de los Componentes y contexts:
src/ ├── components/ │ ├── Products/ ### CRUD de Productos │ │ ├── EditProductModal.jsx │ │ ├── default-image.jpg │ │ ├── CreateProduct.jsx │ │ ├── HomeProducts.styled.jsx │ │ ├── HomeProducts.jsx │ │ ├── Products.jsx │ │ ├── EditProductModal.styled.jsx │ │ ├── CreateProduct.styled.jsx │ │ ├── ImgProducts.jsx │ ├── TheHeader/ ### Estilos de Cabecera │ │ ├── TheHeader.jsx │ │ ├── TheHeader.styled.jsx │ ├── Admin/ ### Perfil Admin │ │ ├── Admin.jsx │ │ ├── Admin.styled.jsx │ ├── Profile/ ### Perfil de usuario │ │ ├── Profile.jsx │ │ ├── Profile.styled.jsx │ ├── RegisterUser/ ### Registro de usuarios │ │ ├── RegisterUser.jsx │ ├── TheFooter/ ### Diseño del Footer de la página │ │ ├── TheFooter.jsx │ │ ├── TheFooter.styled.jsx │ ├── Cart/ ### Carrito de la compra │ │ ├── Cart.jsx │ │ ├── Cart.styled.jsx │ ├── Login/ ### Login de la página │ │ ├── Login.jsx │ │ ├── Login.styled.jsx │ ├── Forbidden/ ### Mensaje para usuarios no admin al intentar acceder a privilegios │ │ ├── Forbidden.jsx │ │ ├── Forbidden.styled.jsx │ ├── ProductCard/ ### Tarjetas de productos │ │ ├── ProductCard.styled.jsx │ │ ├── ProductCard.jsx │ ├── Button/ ### Estilos de botones │ │ ├── Button.styled.jsx │ │ ├── Button.jsx │ ├── ProtectedRoute/ ### Ruta solo accesible a Admin (oculta el botón a otros usuarios) │ │ ├── ProtectedRoute.jsx ├── context/ │ ├── ProductsContext/ ### Contextos de productos │ │ ├── ProductsState.jsx │ │ ├── ProductsReducer.jsx │ ├── UserContext/ ### Contextos de usuario │ │ ├── UserState.jsx │ │ ├── UserReducer.jsx │ ├── OrdersContext/ ### Contexto de pedidos │ │ ├── OrdersState.jsx ├── assets/ ├── theme/ ├── views/ ├── public/

# Extras Realizados

## Admin CRUD
- Permite la creación, modificación y eliminacion de productos (CRUD)
- El usuario con rol Admin tenga una opción en el nav que le lleva a la vista Admin
- Vista Admin donde se puede hacer el CRUD de productos (solamente si tienes el role Admin)
- El usuario en su perfil puede ver sus pedidos
- Que sea responsive
