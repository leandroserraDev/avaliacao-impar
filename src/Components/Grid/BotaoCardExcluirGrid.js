import {  useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'; 
import { UseContext } from '../../Context/Context.js';

export default function BotaoCardExcluirGrid({idCard}){
  const [isHovered, setIsHovered] = useState(false);
  const{ openModalDeleteCard, updateSetCard } = UseContext();

  const handleMouseEnter = () => {
    setTimeout(() =>{
        setIsHovered(true);

    },200)
  };

  const openModal =() =>{
    updateSetCard(idCard);
    openModalDeleteCard()
  }

  const handleMouseLeave = () => {
        setIsHovered(false);

  };


  return(
      <button
      onClick={openModal}
        onMouseEnter={ handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`flex items-center  font-semibold py-2 px-4 rounded-lg transition-all duration-200 ${isHovered ? 'cursor-pointer text-red-600' 
          : 'cursor-default  text-gray-300'}`}
      >
        <FiTrash2 color='red' className="mr-2" /> 
        Excluir
      </button>

  )
}