
export const fazerLogin = async(gmail: string, password: string) => {
    try {
        const response = await fetch('http://localhost:3001/api/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: gmail,
                password: password
            })
        });
        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.statusText}`);
        }else{

        
        const result = await response.json();
        console.log(result);
        return result
        
    }
    } catch (error) {
        console.error('Erro:', error);
    }
}
