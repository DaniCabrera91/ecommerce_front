import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/Login/Login'
import { UserProvider } from './context/UserContext/UserState'

function App() {
 return (
   <UserProvider>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Login />} />
       </Routes>
     </BrowserRouter>
   </UserProvider>
 )
}
export default App