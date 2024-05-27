import { useContext } from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(PizzeriaContext);

  const totalAmount = cart.reduce(
    (accumulator, initialValue) => accumulator + (initialValue.count * initialValue.price), 0
  )
  console.log(totalAmount, "totalAmount")

  return (
    <div>
      <div>
        Carrito
      </div>
      <h4>Detalles</h4>
      {
        cart && cart.map((product, index) => (
          <div className='d-flex justify-content-around' key={product.id}>
            <div className='d-flex'>
              <img src={product.img} alt="Foto pizza" width="50px" />
              <p>{product.name}</p>
            </div>
            <div>
              <span>{product.count * product.price}</span>
              <span>{product.count}</span>
            </div>
            <div className='d-flex'>
              <button className='btn btn-danger' onClick={() => addItem(index)}>
                +
              </button>
              <span>{product.count}</span>
              <button className='btn btn-success' onClick={() => removeItem(index)}>
                -
              </button>
            </div>
          </div>
        ))
      }
      <span>{totalAmount}</span>
    </div>
  )
}

export default Cart;
