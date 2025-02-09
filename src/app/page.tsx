"use client"

import Image from "next/image";
import { verifyToken } from "./auth/verify.token";
import { useEffect } from "react";
import { redirect } from 'next/navigation'
import getCookie from "./utils/get.cookies";

export default function Home() {


  useEffect(() => {
    const checkToken = async () => {
      const token = getCookie('token'); // Supondo que o token esteja armazenado no cookie com o nome 'token'
      if (!token) {
        console.error('Token não encontrado');
        redirect('/login')
        
      }

      try {
        const result = await verifyToken(token);
        console.log('Token verificado:', result);
      } catch (error) {
        console.error('Erro ao verificar token:', error);
        redirect('/login')
      }
    };

    checkToken();
  }, ["/login"]);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              src/app/page.tsx
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
        </div>
      </main>
    </div>
  );
}