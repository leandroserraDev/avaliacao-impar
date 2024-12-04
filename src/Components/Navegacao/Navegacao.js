import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Navegacao({ reloadData, currentPage, pageSize}) {
  return (
    <div className="
    self-center 
    justify-self-center 
    align-super 
    mb-2 ">
    <button
    disabled={ (pageSize <= 1) }
    onClick={() => reloadData()}
      className={`text-white px-6 py-2 rounded-md ${ pageSize > 1?  'hover:bg-orange-600' : null} transition duration-300 ${pageSize <= 1  ? 'bg-gray-400' : 'bg-orange-500'}`}
    >
     Adicionar mais
    </button>
    </div>
  );
};

export default Navegacao;