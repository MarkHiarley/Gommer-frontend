import React from "react"


const SearchBar: React.FC = () => {
    return (
        <div className=" flex justify-center ">
            <div className="shadow-lg w-2/3 2 bg-white rounded-3xl p-3 h-12 flex flex-row" >
                <input type="text" placeholder="Buscar Estabelecimentos" className="w-5/6 focus:no-underline focus:outline-none "/>
                <button>pesquisar</button>
            </div>
        </div>
    )
}
export default SearchBar