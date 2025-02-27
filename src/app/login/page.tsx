'use client'

import { useState } from "react"
import { fazerLogin } from "../utils/authLogin"
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter()
    const [gmail, setGmail] = useState('')
    const [password, setPassword] = useState('')


    const loginUser = async (event: React.FormEvent) => {
        event.preventDefault()
        try {
            const resultado = await fazerLogin(gmail, password)
            console.log(resultado)
            router.push('/user');
        } catch (error) {
            console.log("erro ao fazer login, tente novamente mais tarde" + error)
        }
    }


    return (
        <div className="bg-slate-200 h-screen flex justify-center align-middle">
            <div className="p-3 w-1/2 ">
                <form onSubmit={loginUser} className="justify-center align-middle">
                    <div className="p-1 flex flex-col">
                        <div className="p-3 flex justify-center align-middle">
                            <label htmlFor="gmail" className="text-black p-3">Email </label>
                            <input id="gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} required className="text-black p-1 w-4/6" />
                        </div>
                        <div className="p-3 flex justify-center align-middle">
                            <label htmlFor="password" className="text-black p-3">Senha</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="text-black  p-1 w-4/6" />
                        </div>
                    </div>
                    <div className="flex justify-center align-middle">
                        <button type="submit" className="bg-white text-black p-1">Fazer loginUser</button>
                    </div>
                </form>
            </div>
        </div>
    )
}