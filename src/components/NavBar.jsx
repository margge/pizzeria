import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import { PizzeriaContext } from "../context/PizzeriaContext";
import { useContext } from "react";

const NavBar = () => {
  const { cart } = useContext(PizzeriaContext);

  const totalAmount = cart.reduce(
    (accumulator, initialValue) => accumulator + (initialValue.count * initialValue.price), 0
  )

  return (
    <div>
      <nav className="navbar fixed-top barra navInfo">

        <div className="">
          <a className="navbar-brand d-flex" href='/' >
            <img src="/images/klipartz.png" className="mainIcon" width={60} height={60} />
            <span className="titulo">피자 Town</span>
          </a>
        </div>
        <div className='d-flex'>
          <NavLink to="/carrito" id="total">
            <span width={50} className='pe-2'> 🛒</span>
            <span>{totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })} CLP</span>
          </NavLink>
        </div>
      </nav>
    </div>
  )
};

export default NavBar;
