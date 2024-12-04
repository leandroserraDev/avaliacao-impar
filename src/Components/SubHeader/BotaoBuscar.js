
import { FiSearch } from "react-icons/fi";
import { UseContext } from '../../Context/Context.js';
export default function BotaoBuscar(){
  const { updateQuery } = UseContext();
  
  const handleSearch = (e) => {
    updateQuery(e.target.value); 
  };

    return(

        <div className="flex items-center justify-center min-h-screen p-4 w-full h-full">
      <div className="relative w-[70%] mt-40">
        <input
        onChange={e => handleSearch(e)}
          id="search-input"
          type="text"
          placeholder="Digita aqui sua buscar"
          className="
            w-full p-4 pr-12 text-lg text-gray-900 border  rounded-xl shadow-md 
            h-[70px]
          
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          "
        />
        <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 pointer-events-none">
          <FiSearch className="w-6 h-6" color="gray"/>
        </span>
      </div>
    </div>
    
    )
}