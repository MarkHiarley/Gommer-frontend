"use client";
import { checkToken } from "./utils/checkToken";
import { useEffect } from "react";
import Restaurantes from "./components/NavBar";
import TitleRango from "./components/Title";
import SearchBar from "./components/SeachBar";
import BoxRestaurantes from "./components/BoxRestaurantes";
import IconRestaurante from "./components/IconRestaurante";

interface HomeProps {
  token: string
}

export default function Home({ token }: HomeProps) {
  // useEffect(() => {
  //   checkToken(token);
  // }, []);

  return (
    <div className="bg-slate-200 h-screen  text-black">
      <div>
        <Restaurantes />
        <TitleRango />
        <SearchBar />
        <BoxRestaurantes/>
        
      </div>
    </div>
  );
}