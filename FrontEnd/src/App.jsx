
import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import About from './Pages/About';
import ProductList from './Pages/Product/ProductList';

function App() {

  return (
    <>
    <Routes>

      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<SignUp/>} />
      <Route path='/products' element={<ProductList/>} />
        
    </Routes>
    </>
  )
}

export default App
