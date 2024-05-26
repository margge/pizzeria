import { useContext } from "react";
import { PizzeriaContext } from "../context/PizzeriaContext";
import { useParams, useNavigate } from "react-router-dom";

const Detail = () => {
  const {getPizzas} = useContext (PizzeriaContext);
  const navigate = useNavigate();
  const { id } = useParams();
  let findPizza = getPizzas.find((pizza) => pizza.id == id);
  return (
    <div>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-4">
      <img src={findPizza.img} className="img-fluid rounded-start" alt="Pizza"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{findPizza.name}</h5>
        <p className="card-text">{findPizza.desc}</p>
        <p className="card-text"><small className="text-muted">{findPizza.price}</small></p>
      </div>
    </div>
  </div>
</div>  
     <button onClick={() => navigate (`/`)}>volver</button> 
    </div>
  )
}

export default Detail;
