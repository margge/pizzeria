import { useContext, useState} from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Home from './Home';

const Cart = () => {
  const { cart, addItem, removeItem } = useContext(PizzeriaContext);
  const navigate = useNavigate();
   
  const totalAmount = cart.reduce(
    (accumulator, initialValue) => accumulator + (initialValue.count * initialValue.price), 0
  )
  console.log(totalAmount, "totalAmount")

  const [show, setShow] = useState(false);

  const handleClose = () => {setShow(false),navigate ('/'), window.location.reload()}
  const handleShow = () => setShow(true);

  return (
    <div className='container espacio' >
      <h3> <b> Detalles </b> </h3>

      <h5 hidden={cart.length !== 0} className='mt-4 mb-4 pt-4 pb-3'> 
      Antójate de una deliciosa pizza 
      <img src="/images/klipartz.png" width={50} />
      </h5>
     
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
              <span>{(product.count * product.price).toLocaleString('en-US', {style: 'currency', currency: 'USD', maximumFractionDigits:0})} CLP </span>
            </td>
            <td className='align-middle'>
            <button className='btn btn-warning me-3' onClick={() => removeItem(index)}>
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
      <button id='pagar' disabled={cart.length == 0} onClick={handleShow}>
        Ir a pagar
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Compra exitosa!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Por favor califica nuestra página</Modal.Body>
        <Modal.Body className="rating pb-4 pt-0">
  <input value="5" name="rate" id="star5" type="radio" onClick={handleClose}/>
  <label  for="star5"></label>
  <input value="4" name="rate" id="star4" type="radio" onClick={handleClose}/>
  <label  for="star4"></label>
  <input value="3" name="rate" id="star3" type="radio" onClick={handleClose}/>
  <label  for="star3"></label>
  <input value="2" name="rate" id="star2" type="radio" onClick={handleClose}/>
  <label  for="star2"></label>
  <input value="1" name="rate" id="star1" type="radio" onClick={handleClose}/>
  <label  for="star1"></label>
        </Modal.Body>
      </Modal>
    
    </div>
  )
}

export default Cart;
