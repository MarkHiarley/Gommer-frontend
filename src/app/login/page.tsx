'use client'

import { useState } from "react"
import { fazerLogin } from "../auth/authLogin"
import { redirect } from 'next/navigation'
export default function Login() {

    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')


    const enviardados = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const resultado = await fazerLogin(gmail, password)
            console.log(resultado)
            
        } catch (error) {
            console.log("erro ao fazer login, tente novamente mais tarde" + error)
        }

        redirect('/')
        
    }


    return (
        <div>
            <form onSubmit={enviardados}>
                <label htmlFor="gmail">Email</label>
                <input id="gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} required />
                <br />
                <label htmlFor="password">Senha</label>
                <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <br />
                <button type="submit" className="bg-white text-black">Fazer Login</button>
            </form>
        </div>
    )
}