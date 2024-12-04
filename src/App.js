import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Buscar from './Components/SubHeader/SubHeader';
import HomePage from './Pages/Home/Home';
import { ContextProvider } from './Context/Context.js';
import { ApolloProvider } from '@apollo/client';
import client from './Appolo/Client.js';



function App() {
  return (
    <ApolloProvider client={client}>

      <ContextProvider>

        <div className="flex h-full w-full">
          <HomePage />
        </div>


      </ContextProvider>

    </ApolloProvider>
  );
}

export default App;
