import { useEffect, useState } from "react";
import { UseContext } from "../../Context/Context.js";
import { IoCloseCircle } from "react-icons/io5";
import { useMutation,useQuery, gql } from '@apollo/client';
import logoTrash from '../../imagens/trash.png'
import { BiIdCard } from "react-icons/bi";
import { PAGINATED_QUERY } from '../../graphQL/query/card/CardQuery.js';

export const DELETE_MUTATION = gql`
  mutation DeleteItem($id: Int!) {
    delete(id: $id) {
      success
      errors
    }
  }
`;

function ModalDeletarCard() {
    const { isModalOpenDeleteCard, closeModalDeleteCard, cardSelected,updateSetCard,currentPage, updateCards,cards,triggerReload } = UseContext();

    const [isAnimating, setIsAnimating] = useState(isModalOpenDeleteCard);


    

      const [deleteItem, { }] = useMutation(DELETE_MUTATION,{

        variables:{id:cardSelected },
        onCompleted:()=> {
            closeModalDeleteCard()
            triggerReload()
            alert("Card foi deletado com sucesso")
        }     
    });

    

    async function handleDelete()
    {
        deleteItem();
    }
    
    useEffect(() => {
        if (isModalOpenDeleteCard) {
            document.body.style.overflowY = "hidden";
            document.body.style.paddingRight = "17px";
            setIsAnimating(true);
        } else {
            const timeout = setTimeout(() => {

                document.body.style.overflowY = "auto"
                document.body.style.paddingRight = "0px";
                setIsAnimating(false)
            }, 300); // Espera o tempo da animação
            return () => clearTimeout(timeout);
        }
    }, [isModalOpenDeleteCard]);


    if (!isModalOpenDeleteCard && !isAnimating) return null;
    return (
        <>
            <div
                onClick={closeModalDeleteCard}
                className="
                    flex 
                    inset-0
                    items-center 
                    justify-center 
                    fixed     
                    z-50 
                    bg-gray-300
                bg-opacity-50">
             </div>
             
            <div className="
                            flex
                            flex-col
                            fixed 
                            self-center 
                            justify-self-center
                            inset-0
                            z-50
                            bg-white 
                            min-w-[450px]
                            max-w-[450px] 
                            h-[430px]  transform ">

            <div className="w-full">
                    <IoCloseCircle
                        onClick={closeModalDeleteCard}
                        color="#ff4d01"
                        size={30} className="
                                    cursor-pointer
                                    mt-[-12px]
                                    mr-[-12px]
                                    place-self-end"/>
            </div>
            <div className=" place-self-center">
                <img src={logoTrash} className="w-44 rounded-full mt-10" />
            </div>
               
            <div className=" flex 
            flex-col
             items-center justify-center
              mt-5
          ">
                <h1 
                className=" text-[20pt] text-red-600  font-mono font-medium  leading-6">
                    Excluir
                </h1>
                <span>
                Certeza que deseja excluir?

                </span>
            </div>

            <div className="w-[70%] h-[1px] bg-gray-300 self-center mt-6">

            </div>

            <div className="flex 
            flex-row 
              justify-evenly
              mt-5">
                
                <button 
                onClick={handleDelete}
                className="bg-red-500 rounded p-2 w-[150px] text-white text-[13pt] font-semibold" > Excluir</button>
                <button 

                onClick={closeModalDeleteCard}
                className="bg-white border-red-500 border rounded p-2 w-[150px] text-red-500 text-[13pt]  font-semibold"> Cancelar</button>

            </div>
           
            </div>
        </>
    )

}

export default ModalDeletarCard;