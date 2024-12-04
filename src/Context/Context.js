import { createContext, useContext, useState } from "react";


const Context = createContext();

export const ContextProvider = ({children}) =>{

    //texto para buscar o card
    const [query, setQuery] = useState('');
    const updateQuery = (newQuery) => {
      setQuery(newQuery);
    };

    // contexto para usar a modal de cadastro e edição
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    //contexto para usar a modal de exclusão
    const [isModalOpenDeleteCard, setIsModalOpenDeleteCard] = useState(false);
    const openModalDeleteCard = () => setIsModalOpenDeleteCard(true);
    const closeModalDeleteCard = () => setIsModalOpenDeleteCard(false);

    //contexto para pegar o card(id) selecionado
    
    const[cardSelected, setCardSelected] = useState(null);

    const updateSetCard =(idCard) =>{
            setCardSelected(idCard)
    }

    //current page

    const[currentPage, setCurrentPage] = useState(1);

    const updateCurrentPage = (page) => {
        setCurrentPage(page)

    }

    //cards

    const[cards, setCards] = useState([]);
const updateCards = (data) =>{
    setCards(data)
}

const [reload, setReload] = useState(false); // Flag para recarregar
const triggerReload = () => {
    setCards([])
    setReload(!reload);
     // Alterna a flag para forçar recarregamento
  };


    return (
        <Context.Provider value={{query, updateQuery,
            isModalOpen,
            openModal,
            closeModal,
            isModalOpenDeleteCard,
            openModalDeleteCard,
            closeModalDeleteCard,
            cardSelected,
            updateSetCard,
            currentPage,
            updateCurrentPage,
            cards,
            updateCards,
            reload, 
            triggerReload

        }}>
            {children}
        </Context.Provider>
    )
}


export const UseContext = () => useContext(Context);