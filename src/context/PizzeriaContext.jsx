import { createContext, useEffect, useState } from "react";

export const PizzeriaContext = createContext();

export const PizzeriaProvider = ({ children }) => {
    const [getPizzas, setGetPizzas] = useState([]);
    const [cart, setCart] = useState([]);

    async function allPizzas() {
        const rest = await fetch ("/pizzas.json");
        const data = await rest.json();
        setGetPizzas(data);
    }

    const addToCart = (id,price,name,img) => {
        const indexPizza = cart.findIndex(p => p.id == id)
        const product = {id,price,name,img,count:1}
 
        if(indexPizza >= 0) {
            cart[indexPizza].count++
            setCart([...cart])
        }else {
            setCart([...cart,product])
        }
        console.log(cart)
    }

    useEffect(() => {
        allPizzas();
    },[])

    return (
    <PizzeriaContext.Provider value={{ getPizzas, cart, setGetPizzas, addToCart}}>
        { children }
    </PizzeriaContext.Provider>
    )
};