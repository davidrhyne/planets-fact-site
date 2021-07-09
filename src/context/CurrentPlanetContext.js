// import React, {useState, useContext, createContext } from 'react'

// const ThemeValueContext = createContext()
// const ThemeUpdateValueContext = createContext()

// export function useTheme() {
//     return useContext(ThemeValueContext)
// }

// export function useThemeUpdate() {
//     return useContext(ThemeUpdateValueContext)
// }

// export function ThemeValueProvider({children}) {

//     const [currentPlanet, setCurrentPlanet] = useState('Mercury')

//     function updateCurrentPlanet() {
//         setCurrentPlanet()
//     }

//     return (
//         <ThemeValueContext.Provider value={currentPlanet}>
//             <ThemeUpdateValueContext.Provider value={updateCurrentPlanet}>
//                 {children}
//             </ThemeUpdateValueContext.Provider>
//         </ThemeValueContext.Provider>
//     )

// }