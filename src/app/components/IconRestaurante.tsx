const IconRestaurante = () => {
    return (
        <div className=" flex justify-center p-4">
            <div className="relative">
            <div className="bg-[#2B0D61] text-white text-xs font-semibold px-2 py-1 rounded-full absolute top-[-10px] right-[-10px] w-14 h-14">
                    
                </div>

                <div className="flex flex-row p-3 border shadow-xl w-96" >

                    <img src="https://i.ytimg.com/vi/tPp9zkjfj7Q/hqdefault.jpg?sqp=-oaymwExCNACELwBSFryq4qpAyMIARUAAIhCGAHwAQH4Ac4FgALQBYoCDAgAEAEYfyA1KCUwDw==&rs=AOn4CLB1ZWTVP9G0xaawlrs6bwmgOVMyxA" alt="Foto do restaurante" className="w-16 h-16 object-cover" />

                    <div className="flex flex-col w-11/12">
                        <span className="flex justify-center">Nome restaurante</span>
                        <span className="flex justify-center">endereço restaurante </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IconRestaurante