import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import TheHeader from './components/TheHeader/TheHeader'
import { UserProvider } from './context/UserContext/UserState'
// import { ProductsProvider } from './context/ProductsContext/ProductsState' 
function App() {
 return (
   <div className="App">
     <UserProvider>
       {/* <ProductsProvider> */}
       <Router>
         <TheHeader />
         <Routes>
           <Route path="/" element={<Login />} />
           <Route path="/profile" element={<Profile />} />
         </Routes>
       </Router>
       {/* </ProductsProvider>  */}
     </UserProvider>
   </div>
 )
}
export default App