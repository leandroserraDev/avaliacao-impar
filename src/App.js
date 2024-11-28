import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Buscar from './Components/SubHeader/SubHeader';
import HomePage from './Pages/Home/Home';
import { ModalProvider } from './Context/ModalContext.js'
function App() {
  return (
    <ModalProvider>
        <div className="flex h-full w-full">
          <HomePage />
        </div>
    </ModalProvider>

  );
}

export default App;
