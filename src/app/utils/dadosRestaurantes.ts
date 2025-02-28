import { pegarRestaurantes } from "../api/Restaurantes";
import Restaurante from "../types/Restaurante";

const dadosRestaurantes = async (): Promise<Restaurante[]> => {
    try {
        const data = await pegarRestaurantes();
        if (Array.isArray(data)) {
            return data;
        } 
        return []
    } catch (error) {
        console.error("Erro ao pegar restaurantes:", error);
        return [];
    }
};
export default dadosRestaurantes