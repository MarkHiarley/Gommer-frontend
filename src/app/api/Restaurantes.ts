
export const pegarRestaurantes = async() => {
    try {
        const response = await fetch('http://localhost:3001/api/restaurantes', {
            method: 'GET',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
                
            }
        });
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }

       
        const data = response.json();
        
        return data
    
    
    } catch (error) {
        console.error('Erro:', error);
        return [];
    }
}
