import { useContext } from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(PizzeriaContext);
  const navigate = useNavigate();
   
  const totalAmount = cart.reduce(
    (accumulator, initialValue) => accumulator + (initialValue.count * initialValue.price), 0
  )
  console.log(totalAmount, "totalAmount")


  return (
    <div className='container espacio' >
      <h3> Detalles </h3>
      <table className="table cartItem align-items-center">
      <thead>
    <tr>
      <th></th>
      <th></th>
      <th></th>
    </tr>
  </thead>
  <tbody>
  {
        cart && cart.map((product, index) => (
          <tr key={product.id}>
            <th scope='row' className='d-flex align-items-center' >
              <img src={product.img} alt="Foto pizza" width="110px" />
              <p className='ms-3 mt-3'>{product.name}</p>
            </th>
            <td className='align-middle' >
              <span>{(product.count * product.price).toLocaleString('en-US', {style: 'currency', currency: 'CLP', maximumFractionDigits:0})} CLP </span>
            </td>
            <td className='align-middle'>
            <button className='btn btn-success me-3' onClick={() => removeItem(index)}>
                -
              </button>
              <span>{product.count}</span>
              <button className='btn btn-danger ms-3' onClick={() => addItem(index)}>
                +
              </button>
            </td>
          </tr>
        ))
      }

    </tbody>
      </table>
      <h5 className='mt-4'><b>Total: {totalAmount.toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0})} CLP </b></h5>
      <button  className="volver" onClick={() => navigate (`/`)}>Volver</button>
      <button id='pagar' disabled={cart.length == 0} >Ir a pagar</button>
    </div>
  )
}

export default Cart;
