import { createContext, useState, useContext } from 'react';

const TextQueryContext = createContext();

export const TextQueryProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  // Função para atualizar a consulta
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <TextQueryContext.Provider value={{ query, updateQuery }}>
      {children}
    </TextQueryContext.Provider>
  );
};

// Hook customizado para consumir o contexto
export const useTextQuery = () => useContext(TextQueryContext);