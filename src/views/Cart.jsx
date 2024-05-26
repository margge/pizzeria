import {useContext} from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';

const Cart = () => {
    const {cart, total} = useContext(PizzeriaContext);
    console.log(total, "total")

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
        cart && cart.map((product)=> (
            <div className='d-flex justify-content-around' key={product.id}>
                <div>
                    <img src={product.img} alt="Foto pizza" />
                    <h3>{product.name}</h3>
                </div>
                <div>
                    <span>{product.count * product.price}</span>
                    <span>{product.count}</span>
                </div>
            </div>
        ))
      }
      <span>{totalAmount}</span>
    </div>
  )
}

export default Cart;
