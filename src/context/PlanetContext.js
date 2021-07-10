import React, {useState, useContext, createContext, useEffect } from 'react'
import data from '../data/data.json'

const PlanetContext = createContext();
//const HasErrorContext = createContext()
const IsLoadingContext = createContext()

// custom hook to access data
export function usePlanetData() {
    return useContext(PlanetContext)
}

// export function useHasError() {
//     return useContext(HasErrorContext)
// }

export function useIsLoading() {
    return useContext(IsLoadingContext)
}

export function PlanetContextProvider({children}) {
    const [ planetData, setPlanetData ] = useState([])
    // const [hasError, setHasError] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    

    // load the planet data from supplied data.json file
    useEffect(() => {
        setPlanetData(data)
        setIsLoading(false)
      }, [])
    
    return (
        <PlanetContext.Provider value={planetData}>
            <IsLoadingContext.Provider value={isLoading}>
                {children}
            </IsLoadingContext.Provider>            
        </PlanetContext.Provider>
    )
}