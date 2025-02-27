// app/auth/page.tsx (Next.js 13+)
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Home from "../page";

export default async function AuthPage() {

  const cookieStore = cookies();
  const token = (await cookieStore).get("cookieTest")?.value;

  if (!token) {
    redirect("/login"); 
  }
  
  return <Home token ={token}/>;
}