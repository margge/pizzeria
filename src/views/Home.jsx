import { useContext } from 'react';
import { PizzeriaContext } from '../context/PizzeriaContext';
import "bootstrap/dist/css/bootstrap.css"
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

const Home = () => {

  const { getPizzas, addToCart } = useContext(PizzeriaContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="banner"></div>
      <Carousel className='carr'>
        <Carousel.Item interval={10000}>
        <img src='/images/pz1.png' className='img_comodin' alt="Imagen no encontrada" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src='/images/pz2.png' alt="" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src="/images/pz3.jpg" alt="" />
        </Carousel.Item>
      </Carousel>

      <div className='container'>
        <div className='row'>
          {getPizzas && getPizzas.map((pizza) => (
            <div key={pizza.id} value={pizza.id} className='col-md-4 d-flex justify-content-evenly'>
              <div className="card cardHome">
                <img className="card-img-top" src={pizza.img} alt="Pizza img" />
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
                  <p className="card-text">{pizza.price.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} CLP</p>
                  <div className='d-flex justify-content-sm-center'>
                    <button className='btn btn-danger me-2' onClick={() => navigate(`/detalle/${pizza.name}`)}>
                      Ver más
                    </button>

                    <button className="CartBtn" onClick={() => addToCart(pizza)}>
                      <span className="IconContainer">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512" fill="rgb(17, 17, 17)" className="cart"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path></svg>
                      </span>
                      <p className="text">Agregar</p>
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

