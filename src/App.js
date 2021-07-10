import './App.css';
import { PlanetContextProvider } from './context/PlanetContext'
import { CurrentPlanetProvider } from './context/CurrentPlanetContext'
import { CategoryProvider } from './context/CategoryContext'
import { Home } from './pages'


function App() {
  return (
    <PlanetContextProvider>
      <CurrentPlanetProvider>
        <CategoryProvider>
          <div>
            <Home />
          </div>
        </CategoryProvider>
      </CurrentPlanetProvider>
    </PlanetContextProvider>
    
  );
}

export default App;
