// import './App.css';
import { PlanetContextProvider } from './context/PlanetContext'
import { CategoryProvider } from './context/CategoryContext'
import { Home } from './pages'
import {  ThemeProvider, createGlobalStyle } from 'styled-components'
import { useCurrentPlanet } from './context/CurrentPlanetContext'
import {THEME} from './constants/themes'
import { COLOR_SCHEME } from './constants/constants'


function App() {

  const currentPlanet = useCurrentPlanet()

  // using styled-components ThemeProvider to provide 
  // the current planet's accent color to components for styling
  const themeValue = currentPlanet === 'Mercury' ? THEME.MERCERY : 
    currentPlanet === 'Venus' ? THEME.VENUS : 
    currentPlanet === 'Earth' ? THEME.EARTH : 
    currentPlanet === 'Mars' ? THEME.MARS : 
    currentPlanet === 'Jupiter' ? THEME.JUPITER : 
    currentPlanet === 'Saturn' ? THEME.SATURN : THEME.URANUS

  // using styled-components createGlobalStyle for some global CSS values
  const GlobalStyle = createGlobalStyle`
    body {
      font-family: 'Spartan', sans-serif;
      font-size: .6875rem;
      font-weight: 400;
      box-sizing: border-box;
      margin: 0 auto;
      background: ${COLOR_SCHEME.PRIMARY};
      color: ${COLOR_SCHEME.WHITE};
      background-image: url('./images/background-stars.svg');
  }
`
  return (
    <PlanetContextProvider>
      <GlobalStyle />
        <CategoryProvider>
          <ThemeProvider theme={themeValue}>
            <div>
              <Home />
            </div>
          </ThemeProvider>
        </CategoryProvider>
    </PlanetContextProvider>    
  );
}

export default App;