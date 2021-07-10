import React, {useState, useContext, createContext } from 'react'

const CurrentPlanetContext = createContext()
const CurrentPlanetUpdateContext = createContext()

//  hook to provide access to the current planet value
export function useCurrentPlanet() {
    return useContext(CurrentPlanetContext)
}

// hook to provide access to updating the current planet value
export function useCurrentPlanetUpdate() {
    return useContext(CurrentPlanetUpdateContext)
}

export function CurrentPlanetProvider({children}) {

    const [currentPlanet, setCurrentPlanet] = useState('Mercury')

    function updateCurrentPlanet(newPlanet) {
        setCurrentPlanet(newPlanet)
    }

    return (
        <CurrentPlanetContext.Provider value={currentPlanet}>
            <CurrentPlanetUpdateContext.Provider value={updateCurrentPlanet}>
                {children}
            </CurrentPlanetUpdateContext.Provider>
        </CurrentPlanetContext.Provider>
    )
}