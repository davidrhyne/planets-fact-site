import React, { useState, useEffect}  from 'react'
import { usePlanetData} from '../context/PlanetContext'
import { HeaderContainer } from '../containers/header'


export default function Home() { 
    const planetData = usePlanetData();
    const [ planet, setPlanet ] = useState('Mercury')
    const [ view, setView ] = useState('overview')

    console.log('home planet data = ', planetData)
    console.log(`planet = ${planet}, view = ${view}`)

    return (
        <div>
            <HeaderContainer>this is in the header, but probably should be deleted</HeaderContainer>
            <div>this will be the body that needs to be constructed</div>
            <div>this with be the footer that needs to be constructed</div>
        </div>

    )

}
