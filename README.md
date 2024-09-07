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

El archivo de configuración de rutas principales se encuentra en el componente `App.jsx`

### Ejemplo de Configuración de Rutas:

```jsx
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/profile" component={Profile} />
        {/* Otras rutas */}
      </Switch>
      <Footer />
    </Router>
  );
}
```
export default App;

# Extras Realizados

## Admin CRUD
- Permite la creación, modificación y eliminacion de productods
