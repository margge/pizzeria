import { useContext } from "react";
import { PizzeriaContext } from "../context/PizzeriaContext";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const {getPizzas, addToCart} = useContext (PizzeriaContext);
  const navigate = useNavigate();
  const { name } = useParams();
  let findPizza = getPizzas.find((pizza) => pizza.name == name);
  return (
    <div>
    <div className="card descrip espacio">
  <div className='d-flex'>
    <div>
      <img src={findPizza.img} className='rounded pizzaDesc' alt="Pizza"/>
    </div>
    <div>
      <div>
        <h3 className="nameDesc">{findPizza.name}</h3>
        <p className="desc">{findPizza.desc}</p>
        <div className='ingre'>
      <h4>Ingredientes</h4>
    <ul>
      <li className='text-capitalize'>
          🍕 {findPizza.ingredients[0]}
      </li>
      <li className='text-capitalize'>
          🍕 {findPizza.ingredients[1]}
      </li>
      <li className='text-capitalize'>
          🍕 {findPizza.ingredients[2]}
      </li>
      <li className='text-capitalize'>
          🍕 {findPizza.ingredients[3]}
      </li>
    </ul>
    </div>
        <p><b>Precio: {findPizza.price.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0})} CLP </b></p>
      </div>
    </div>
  </div>
    <button className="agregar" onClick={() => addToCart(findPizza)}>Agregar</button>
</div>  
     <button className="volver" onClick={() => navigate (`/`)}>volver</button> 
    </div>
  )
}

export default Detail;
