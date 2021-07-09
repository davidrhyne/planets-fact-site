import logo from './logo.svg';
import './App.css';
import { PlanetContextProvider } from './context/PlanetContext'
import { Home } from './pages'


function App() {
  return (
    <PlanetContextProvider>
      <div>
        <Home />
      </div>
    </PlanetContextProvider>
    
  );
}

export default App;
