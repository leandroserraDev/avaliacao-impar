import { createContext, useContext, useState } from "react";

// Criando o contexto para a Modal
const ModalContext = createContext();

// Componente Provedor do Contexto
export const ModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Funções para abrir e fechar a modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

// Hook para usar o contexto em outros componentes
export const useModal = () => useContext(ModalContext);
