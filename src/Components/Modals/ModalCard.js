import React, { useState, useEffect } from 'react';
import { UseContext } from '../../Context/Context.js';
import { FaWpforms } from "react-icons/fa6";
import { useMutation } from "@apollo/client";
import { CREATE_CARD } from '../../graphQL/mutation/card/CardMutation.js';

const ModalCard = () => {
    const { isModalOpen, closeModal } = UseContext();
    const [isAnimating, setIsAnimating] = useState(isModalOpen);
    const [cardName, setCardName] = useState('');
    const [file, setFile] = useState(null);
    const handleNameChange = (e) => setCardName(e.target.value);
    const handleFileChange = (e) => setFile(e.target.files[0]);


  const [createCard, { data, loading, error }] = useMutation(CREATE_CARD, {
 
    onCompleted: (data) => {
      if (data.createCard.success) {
        alert("Card criado com sucesso!");
      } else {
        alert("Falha ao criar o card.");
      }
    }
  });

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!cardName || !file) {

            return;
        }
console.log(file)
        const formData = new FormData();
        formData.append("name", cardName);
        formData.append("file", file);
      

        console.log(formData);

        for (let pair of formData.entries()) {
            console.log(pair[0] + ": " + pair[1]);
        }

      
    try {
        createCard({ variables: { cardName, file } });
      } catch (err) {
        console.error("Erro ao criar o card:", err);
      }
    };

    
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflowY = "hidden";
            document.body.style.paddingRight = "17px";
            setIsAnimating(true);
        } else {
            const timeout = setTimeout(() => {
                
                document.body.style.overflowY = "auto"
                document.body.style.paddingRight = "0px";
                setIsAnimating(false)}, 300); // Espera o tempo da animação
            return () => clearTimeout(timeout);
        }
    }, [isModalOpen]);


  



    if (!isModalOpen ) return null;

    return (
        <>
            <div
                className={`
             
                   fixed inset-0  
                    bg-white 
                    bg-opacity-50   
                    z-50 
                    transform 
                    transition-transform 
                    duration-200 
                    ${isAnimating ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={closeModal}
            ></div>
            <div
                className={`fixed 
                    top-0 
                    right-0 
                    w-1/3 
                    h-full 
                    bg-white 
                    p-6  
                    z-50 
                    transform 
                    transition-transform 
                    duration-300 ${isAnimating ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className='flex 
                flex-row 
                mb-4 
                mt-10'>

                    <FaWpforms className='mr-5' size={50} />
                    <h2 className="text-2xl 
                font-bold 
                text-[#5F1478] 
                text-[22pt] 
                mt-2">Criar Card</h2>
                </div>
                <div className='h-[2px] 
                 bg-gray-200 
                 w-[100%]    
                 justify-self-center 
                 mt-6 
                 mb-10'>

                </div>

                <form onSubmit={handleSubmit} className=' flex 
                flex-col'>
                    <div className=" flex  
                    flex-col mb-4">
                        <label className=" text-sm 
                        font-medium 
                        text-gray-700 
                        text-[11pt]">DIGITE UM NOME PARA O CARD</label>
                        <input
                            type="text"
                            value={cardName}
                            onChange={handleNameChange}
                            className="mt-2  
                            w-full 
                            px-4 
                            py-2 
                            border 
                            border-gray-300 
                            rounded-md"
                            required
                        />
                    </div>
                    <div className="mb-4  ">
                        <label className=" 
                        text-sm 
                        font-medium 
                        text-gray-700 
                        text-[11pt]">INCLUA UMA IMAGEM PARA APARECER NO CARD</label>
                        <input
                            type="file"
                            accept=".png"
                            onChange={handleFileChange}
                            className="
                            mt-2 
                            w-full
                            px-4 
                            py-2 
                            border-2  
                          text-gray-500 
                         bg-white 
                        rounded-md 
                        cursor-pointer 
                        file:cursor-pointer 
                    file:bg-white 
                    file:border-1 
                    file:border-orange-500 
                    file:text-orange-500 
                    file:px-4 file:py-2 
                    file:rounded-md 
                    file:mr-4 
                    transition duration-200
                                    "
                        />
                    </div>
                    <div className='h-[2px] 
                 bg-gray-200 
                 w-[100%]    
                 justify-self-center 
                 mt-8 
                 mb-8'>

                    </div>

                    <div className="flex 
                    justify-between">
                        <button
                            type="button"
                            onClick={closeModal}
                            className="px-4 
                            py-2 
                            bg-gray-500
                             text-white 
                             rounded-md"
                        >
                            Fechar
                        </button>
                        <button
                            type="submit"
                            className="px-4 
                            py-2 
                            bg-blue-500 
                            text-whit
                            e rounded-md"
                        >
                            Cadastrar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default ModalCard;