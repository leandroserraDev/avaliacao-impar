import Navegacao from "../Navegacao/Navegacao";
import Card from "./CardsGrid";

import { UseContext } from './../../Context/Context.js';
export default function Grid({ cards, reloadData, currentPage, pageSize }) {
    const { openModal } = UseContext(); 

    return (
        <div className="flex flex-col  w-[70%] self-center ">


            <div class="flex 
            items-center 
            justify-between 
            p-4    
            mt-10">
                <span class="
                text-purple-500 
                font-semibold  
                text-[20pt]">Resultado da pesquisa</span>
                <button onClick={openModal} class="
                bg-orange-500 
                text-white 
                font-semibold 
                py-3 
                px-8 
                rounded-lg 
                hover:bg-orange-600 
                focus:outline-none 
                focus:ring-2 
                focus:ring-orange-400">
                    Novo Card
                </button>
            </div>


            <div className="flex 
            items-center   
            justify-center 
            gap-4 
            gap-y-4 
            w-full 
            flex-wrap 
            mb-5 " >

                {cards && cards.map((obj, index) => {
                    return (
                        <div key={index}>
                            <Card  idCard={obj.id} cardName={obj.name} status={obj.eStatusCar} image={obj.base64} />
                        </div>
                    )
                })}
            </div>
            <Navegacao reloadData={() => reloadData() } currentPage={currentPage} pageSize={pageSize}/>


        </div>

    )
}