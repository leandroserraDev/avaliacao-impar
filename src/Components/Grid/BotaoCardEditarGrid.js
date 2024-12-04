import { useState } from 'react';
import { FiTrash2, FiEdit2 } from 'react-icons/fi'; 
import { UseContext } from './../../Context/Context.js';

export default function BotaoCardEditarGrid({nameCard, idCard}) {
  const{ updateNameCard,updateSetCard, openModal } = UseContext();

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => {
      setIsHovered(true);

    }, 200)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);

  };

  const openModalEdit =() =>{
    updateSetCard(idCard)
    updateNameCard(nameCard)
    openModal()
  }

  return (
    <button
      onClick={openModalEdit}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex 
            items-center  
            font-semibold 
            py-2 
            px-4 
            rounded-lg 
            transition-all 
            duration-200 
            ${isHovered ?
          'cursor-pointer text-[#FFA500]'
          :
          'cursor-default  text-gray-300'}`}
   
    >
      <FiEdit2 color='orange' className="mr-2" />
      Editar
    </button>

  )
}