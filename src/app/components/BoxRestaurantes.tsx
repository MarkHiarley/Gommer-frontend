import { useEffect, useState } from "react";
import { pegarRestaurantes } from "../api/Restaurantes";

interface Restaurante {
    id: number;
    foto: string;
    nome: string;
    endereco: string;
}

const BoxRestaurantes = () => {
    const [restaurantes, setRestaurantes] = useState<Restaurante[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await pegarRestaurantes();
                if (Array.isArray(data)) {
                    setRestaurantes(data);
                } else {
                    console.error("Dados recebidos não são um array:", data);
                }
            } catch (error) {
                console.error("Erro ao pegar restaurantes:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <div>
                {restaurantes.map((restaurante) => (
                    <div key={restaurante.id}>
                        <img src={restaurante.foto} alt={restaurante.nome} />
                        <p>{restaurante.nome}</p>
                        <p>{restaurante.endereco}</p>
                        <span>box aqui</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoxRestaurantes;