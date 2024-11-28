import { useState } from 'react';
import { FiTrash2, FiEdit } from 'react-icons/fi'; // Importando ícones de excluir e editar
export default function BotaoCardExcluirGrid(){

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() =>{
        setIsHovered(true);

    },200)
  };

  const handleMouseLeave = () => {
        setIsHovered(false);

  };
  return(
      <button
        onMouseEnter={ handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${isHovered ? 'cursor-pointer text-red-600' 
          : 'cursor-default  text-gray-300'}`}
        // Efeito de delay para virar ponteiro no botão de editar
      >
        <FiTrash2 color='red' className="mr-2" /> 
        <span className=' text-[15px]'>
        Excluir
          </span>
      </button>

  )
}