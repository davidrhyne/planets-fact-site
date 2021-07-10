import React from 'react'
import { Container, List, ListItem } from './styles/NavBar'
import { usePlanetData } from '../../context/PlanetContext'
import { useCurrentPlanet, useCurrentPlanetUpdate } from '../../context/CurrentPlanetContext'


export default function NavBar({children, ...restProps}) {
    return (
        <Container {...restProps}>{children}</Container>
    )
}

NavBar.ListItem = function NavBarListItem({ children, ...restProps}) {
    const planetData = usePlanetData();
    planetData.forEach(planet => console.log('planets = ', planet.name))
    return (
        <ListItem {...restProps}>{children}</ListItem>
    )
}

NavBar.List = function NavBarList({ children, ...restProps}) {
    const planetData = usePlanetData();
    //planetData.forEach(planet => console.log('planets = ', planet.name))

    const currentPlanet = useCurrentPlanet();
    console.log('current planet = ', currentPlanet)

    const updateCurrentPlanet = useCurrentPlanetUpdate()

    function handlePlanetClick(planet) {
        console.log(`${planet} was clicked `)
        updateCurrentPlanet(`${planet}`)
        //console.log('updated planet = ', currentPlanet)
    }
    
    return (
        <List {...restProps}>
            {
                planetData.map(planet => {
                    return (
                        <ListItem key={planet.name} onClick={ () => handlePlanetClick(planet.name)}>
                            {planet.name}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}