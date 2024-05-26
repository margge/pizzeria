import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import "bootstrap/dist/css/bootstrap.css";

import Home from './views/Home';
import Detail from './views/Detail';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

const App = () => {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detalle/:id' element={<Detail/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>        
      </Routes>
    </>
  )
}

export default App
