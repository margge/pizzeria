import {useContext, useState} from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom';
const Home = () => {

    const {getPizzas, addToCart} = useContext(PizzeriaContext);
    const navigate = useNavigate();

  return (
    <div className='container'>
        <div className='row'>
      {getPizzas && getPizzas.map((pizza) => (
        <div key={pizza.id} className='col-md-3'>
  <div className="card">
  <img className="card-img-top" src={pizza.img} alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{pizza.name}</h5>
    <p className="card-text">{pizza.ingredients}</p>
    <p className="card-text">{pizza.price}</p>
    <div className='d-flex'>
        <button className='btn btn-danger' onClick={() => navigate("/detalle")}>
            Ver más
        </button>
        <button className='btn btn-success' onClick={() => addToCart(pizza)}>
            Agregar
        </button>
    </div>
  </div>
</div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Home;
