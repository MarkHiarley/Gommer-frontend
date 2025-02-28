import { useEffect, useState } from "react";
import IconRestaurante from "./IconRestaurante";
import dadosRestaurantes from "../utils/dadosRestaurantes";
import Restaurante from "../types/Restaurante";



const BoxRestaurantes = () => {
  
    const [restaurantes , setRestaurantes] = useState<Restaurante[]>([]);
    useEffect(() => {
        const fetchData = async() =>{
        const data = await dadosRestaurantes();
        setRestaurantes(data)
        }

        fetchData()
    }, []);

    return (
        <div>
             <div>
               {
            //mandar os dados como props e criar varios componentes seguindo a logica do map 
               }
            </div>
        </div>
    );
};

export default BoxRestaurantes;