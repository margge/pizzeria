import { Route, Routes } from 'react-router-dom'
import './App.css'

import Home from './views/Home';
import Detail from './views/Detail';
import Cart from './views/Cart';
import NotFound from './views/NotFound';

const App = () => {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detalle' element={<Detail/>}/>
        <Route path='/carrito' element={<Cart/>}/>
        <Route path='*' element={<NotFound/>}/>        
      </Routes>
    </>
  )
}

export default App
