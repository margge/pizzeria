import { Children, createContext, useEffect, useState } from "react";

export const PizzeriaContext = createContext();

export const PizzeriaProvider = ({ children }) => {
    const [getPizzas, setGetPizzas] = useState([]);

    async function allPizzas() {
        const rest = await fetch ("/pizzas.json");
        const data = await rest.json();
        setGetPizzas(data);
        console.log (data)
    }

    useEffect(() => {
        allPizzas();
    },[])

    return (
    <PizzeriaContext.Provider value={{ getPizzas,setGetPizzas}}>
        { children }
    </PizzeriaContext.Provider>
    )
};