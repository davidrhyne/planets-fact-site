import React, {useState, useContext, createContext, useEffect } from 'react'
import data from '../data/data.json'

const PlanetContext = createContext();

// custom hook to access data
export function usePlanetData() {
    return useContext(PlanetContext)
}

export function PlanetContextProvider({children}) {
    const [ planetData, setPlanetData ] = useState([])

    // load the planet data from supplied data.json file
    useEffect(() => {
        setPlanetData(data)
      }, [])
    
    return (
        <PlanetContext.Provider value={planetData}>
            {children}
        </PlanetContext.Provider>
    )
}