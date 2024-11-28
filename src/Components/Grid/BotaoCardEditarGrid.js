import { useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi'; // Importando ícones de excluir e editar

import { useModal } from './../../Context/ModalContext.js';

export default function BotaoCardEditarGrid(){

    const [isHovered, setIsHovered] = useState(false);
    const { openModal } = useModal(); 
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
        onClick={openModal}
          onMouseEnter={ handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={`flex items-center text-white font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${isHovered ? 'cursor-pointer text-[#FFA500]' 
            : 'cursor-default  text-gray-300'}`}
          // Efeito de delay para virar ponteiro no botão de editar
        >
          <FiEdit2 color='orange' className="mr-2" /> 
          <span className=' text-[15px]'>
          Editar
            </span>
        </button>

    )
}