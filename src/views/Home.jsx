import {useContext } from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom';
//import NotFound from './NotFound';
const Home = () => {

    const {getPizzas, addToCart} = useContext(PizzeriaContext);
    const navigate = useNavigate();

  return (
    <>

<div className="banner">
    
   </div>

    <div className='container'>   
        <div className='row'>
      {getPizzas && getPizzas.map((pizza) => (
        <div key={pizza.id} value={pizza.id} className='col-md-4 d-flex justify-content-evenly'>
  <div className="card cardHome">
  <img className="card-img-top" src={pizza.img} alt="Pizza img"/>
  <div className="card-body">
    <h3 className="card-title">{pizza.name}</h3>
    <hr />
    <div className='ingre'>
      <h4>Ingredientes</h4>
    <ul>
      <li className='text-capitalize'>
          🍕 {pizza.ingredients[0]}
      </li>
      <li className='text-capitalize'>
          🍕 {pizza.ingredients[1]}
      </li>
      <li className='text-capitalize'>
          🍕 {pizza.ingredients[2]}
      </li>
      <li className='text-capitalize'>
          🍕 {pizza.ingredients[3]}
      </li>
    </ul>
    </div>
    <p className="card-text">{pizza.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0})} CLP</p>
    <div className='d-flex justify-content-sm-center'>
        <button className='btn btn-danger me-2' onClick={()=>navigate(`/detalle/${pizza.name}`) }>
            Ver más
        </button>
        <button className='btn btn-success ms-2' onClick={() => addToCart(pizza)}>
            Agregar
        </button>
    </div>
  </div>
</div>
        </div>
      ))}
      </div>
    </div>
    </>
  )
}

export default Home;
