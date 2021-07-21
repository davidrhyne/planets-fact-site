import React from 'react'
// import { usePlanetData} from '../context/PlanetContext'
import { HeaderContainer } from '../containers/header'
import { CardContainer } from '../containers/card'
import { FooterContainer } from '../containers/footer'


export default function Home() { 
    // const planetData = usePlanetData();
    // const [ planet, setPlanet ] = useState('Mercury')
    // const [ view, setView ] = useState('overview')

    // console.log('home planet data = ', planetData)
    //console.log(`planet = ${planet}, view = ${view}`)

    return (
        <div>
            <HeaderContainer />
            <CardContainer />
            <FooterContainer />
        </div>
    )
}
